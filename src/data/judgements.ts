import { getStore } from '@netlify/blobs';

const dateFolder = () => {
  return new Date().toISOString().split('T')[0]
}

// Utility functions to abstract the fetching and setting operations
const getJudgement = async (castHash, judgeFid) => {
  const store = getStore('judgements');
  const judgementId = buildJudgementId(castHash, judgeFid);
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

export {
  getJudgement,
  setJudgement
}
