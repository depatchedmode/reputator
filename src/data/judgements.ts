import { getStore } from '@netlify/blobs';

const dateFolder = () => {
  return new Date().toISOString().split('T')[0]
}

// Utility functions to abstract the fetching and setting operations
const getJudgement = async (date, castHash, judgeFid) => {
  const store = getStore('judgements');
  const judgementId = `${date}/${castHash}-${judgeFid}`;
  return await store.get(judgementId, { type: 'json' } ) || {};
};

const setJudgement = async (castHash, judgeFid, judgement) => {
  const store = getStore('judgements');
  const judgedAt = new Date().toISOString();
  const key = `${dateFolder()}/${castHash}-${judgeFid}`;

  return await store.setJSON(key, {
    judgeFid,
    castHash,
    judgement,
    judgedAt
  });
};

const getJudgementDay = async (day) => {
  const store = getStore('judgements', { fetch: fetch });
  const judgements = [];
  
  // Assuming the use of directories for each day, e.g., judgements/2024-02-12/
  const { blobs } = await store.list({ prefix: `${day}/` });

  for (const blob of blobs) {
    const judgementData = await store.get(blob.key, { type: 'json' });
    judgements.push(judgementData);
  }

  return judgements;
};

export {
  getJudgement,
  setJudgement,
  getJudgementDay,
}
