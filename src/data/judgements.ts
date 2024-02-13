import { getStore } from '@netlify/blobs';

const buildJudgementId = (castHash, judgeFid) => {
  return `${castHash}-${judgeFid}`;
}

// Utility functions to abstract the fetching and setting operations
const getJudgement = async (castHash, judgeFid) => {
  const store = getStore('judgements');
  const judgementId = buildJudgementId(castHash, judgeFid);
  return await store.get(judgementId, { type: 'json' } ) || {};
};

const setJudgement = async (castHash, judgeFid, judgement) => {
  const store = getStore('judgements');
  const data = await store.setJSON(buildJudgementId(castHash, judgeFid), {
    judgeFid,
    castHash,
    judgement,
    judgedAt: new Date().toISOString()
  });
  return data;
};

export {
  getJudgement,
  setJudgement
}
