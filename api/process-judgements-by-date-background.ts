import { getStore } from '@netlify/blobs';
import { getCast } from '../src/data/casts.js';

export default async(req) => {
  // Initialize the store
  const searchParams = new URL(req.url).searchParams;
  const targetDate = searchParams.get('date') || '2024-02-13'; // default to the launch date
  const store = getStore('results');

  // const dayInMS = 1000*60*60*24;
  const dayInMS = 0;
  const targetDateInMS = new Date(targetDate).valueOf() + dayInMS;
  const todayInMS = new Date().valueOf();

  if (todayInMS < targetDateInMS) return new Response('Cannot process future date', { 
    status: 400,
  });

  try {
    const summary = await fetchAndAggregateJudgements(targetDate);
    await store.setJSON(`judgements-by-date/${targetDate}`, summary);
    
    return new Response(JSON.stringify(summary), { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Error processing judgements:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

async function listJudgementBlobsForDate(date) {
  const store = getStore('judgements');
  const { blobs } = await store.list({ directories: true, prefix: `${date}/` });
  return blobs;
}

async function fetchAndAggregateJudgements(targetDate) {
  const blobsList = await listJudgementBlobsForDate(targetDate);
  const summary = {
    date: targetDate,
    totalJudgements: 0,
    judgementBreakdown: { totalPositive: 0, totalNeutral: 0, totalNegative: 0 },
    totalJudges: 0,
    totalCastersJudged: 0,
    totalCasts: 0,
    judgeFids: new Set(),
    casterFids: new Set(),
    castHashes: new Set(),
    judgementIds: new Set(),
    averageJudgement: 0,
  };

  const store = getStore('judgements');
  for (const blob of blobsList) {
    const judgementData = await store.get(blob.key, { type: 'json' });
    summary.date = judgementData.judgedAt.split('T')[0]; // Extract date
    summary.totalJudgements++;
    if (judgementData.judgement === 'positive' || judgementData.judgement === 1) 
      summary.judgementBreakdown.totalPositive++;
    if (judgementData.judgement === 'neutral' || judgementData.judgement === 0) 
      summary.judgementBreakdown.totalNeutral++;
    if (judgementData.judgement === 'negative' || judgementData.judgement === -1) 
      summary.judgementBreakdown.totalNegative++;
    summary.judgementIds.add(blob.key);

    // older judgement entries didn't include the casterFid, so we fetch it
    if (!judgementData.casterFid) {
      try {
        const cast = await getCast(judgementData.castHash);
        judgementData.casterFid = cast.author.fid;
        console.log(`Cast ${judgementData.castHash} filled in`);
      } catch (err) {
        console.log(`Cast ${judgementData.castHash} not found`);
      }
    }

    summary.castHashes.add(judgementData.castHash);
    summary.casterFids.add(judgementData.casterFid);
    summary.judgeFids.add(judgementData.judgeFid);
  }

  summary.totalJudges = summary.judgeFids.size;
  summary.totalCastersJudged = summary.casterFids.size;
  summary.totalCasts = summary.castHashes.size;
  summary.judgeFids = Array.from(summary.judgeFids);
  summary.casterFids = Array.from(summary.casterFids);
  summary.castHashes = Array.from(summary.castHashes);
  summary.judgementIds = Array.from(summary.judgementIds);

  summary.averageJudgement = 
    ( summary.judgementBreakdown.totalPositive 
      - summary.judgementBreakdown.totalNegative ) / summary.totalJudgements;

  return summary;
}

export const config = {
  path: "/process/judgements-by-date"
};