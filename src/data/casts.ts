const getRandomCast = async() => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json', 
      api_key: process.env.NEYNAR_API_KEY
    }
  };

  const base = 'https://api.neynar.com/v2/farcaster/feed';
  // @ts-expect-error
  const params = new URLSearchParams({
    'feed_type': 'filter',
    'filter_type': 'channel_id',
    'channel_id': process.env.CHANNEL_ID,
    'with_recasts': false,
    'with_replies': false,
    'limit': 10
  });
  const url = new URL(`${base}?${params}`).href;
  const response = await fetch(url, options)
  const data = await response.json();
  const casts = data.casts || [];
  const randomCast = casts[Math.floor(Math.random() * casts.length)]

  return randomCast;
}

export {
  getRandomCast,
}