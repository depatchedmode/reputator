import { getStore } from '@netlify/blobs';
import { getCast } from '../src/data/casts.js';

export default async(req) => {
  // Initialize the store
  const searchParams = new URL(req.url).searchParams;
  const targetDate = searchParams.get('date') || '2024-02-13'; // default to the launch date

  try {
    const store = getStore('judgements');
    const { blobs } = await store.list({ directories: true, prefix: `${targetDate}/` });
    for (const blob of blobs) {
      const judgementData = await store.get(blob.key, { type: 'json' });
      if (!judgementData.casterFid) {
        try {
          const cast = await getCast(judgementData.castHash);
          judgementData.casterFid = cast.author.fid;
          await store.setJSON(blob.key, judgementData);
          console.log(`Cast ${judgementData.castHash} filled in`);
        } catch (err) {
          console.log(`Cast ${judgementData.castHash} error`, err);
        }
      }
    }
    
    return new Response(`Finished`, { 
      status: 200,
    });
  } catch (error) {
    console.error('Error processing judgements:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export const config = {
  path: "/process/add-casterid-to-judgements"
};