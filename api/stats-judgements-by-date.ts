import { getStore } from '@netlify/blobs';

export default async(req) => {
  const searchParams = new URL(req.url).searchParams;
  const targetDate = searchParams.get('date') || '2024-02-13'; // default to the launch date
  const store = getStore('results');

  try {
    const summary = await store.get(`judgements-by-date/${targetDate}`, { type: 'json' });
    if (summary) {
      return new Response(JSON.stringify(summary), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      await fetch(`${process.env.URL}/process/judgements-by-date?date=${targetDate}`);
      return new Response(JSON.stringify({ message: `${targetDate} was not yet processed. A background job has been initiated. Check back in 15 minutes.` }), {
        status: 202,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response('Error retrieving results', { status: 500 });
  }
}

export const config = {
  path: "/stats/judgements-by-date"
};