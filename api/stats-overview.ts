import { getStore } from '@netlify/blobs';
const storeName = 'judgements';

export default async() => {
  const store = getStore(storeName);
  const output = {
    days: [],
    counts: {}
  };

  try {
    const { directories } = await store.list({ directories: true })
    output.days = directories;
    for (const dateFolder of directories) {
      const { blobs }= await store.list({ directories: true, prefix: dateFolder })
      output.counts[dateFolder] = blobs.length;
    }

    return new Response(JSON.stringify(output), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('An error occurred:', error);
    return new Response(JSON.stringify({ message: "Internal Server Error", error: error.message }), {
      status: 500,
    });
  }
};

export const config = {
    path: "/stats/overview"
};