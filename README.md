# Reputator

A simple Frame for helping a Warpcast Channel's members rank the quality of contributions. 

**How:** 
1. You get shown a random cast from the channel
2. You give it a thumbs up or a thumbs down. 
3. Your judgement impacts that caster's reputation. The degree to which it contributes will depend on your own reputation.

Developed using `v0.8.3` of [`simplest-frame`](https://github.com/depatchedmode/simplest-frame)

## Todo

- Frames
    - Poster
        - Start Ranking
        - Community Pulse (a sparkline of overall quality over the past 2 weeks)
        - View Lists
    - Judge
        - Thumbs up
        - Dice 
        - Thumbs down

- Data needed:
    - a random cast from a channel
    - warpcast opengraph image

- Data to Store:
    - Judgements: id(judgeFid+castHash), judgeFid, castHash, casterFid, judgement, timestamp
    - Casts: castHash, judgements (counter)
    - Casters: fid, judgements (counter)

- Post processing
    - once an hour, crunch the data
    - calculate all casters reputations

## Getting started

1. Clone the repo
2. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/)
3. Copy `sample.env` to `.env` and add:
    + your Netlify Key, for deploys: `NETLIFY_AUTH_TOKEN`
    + a [Wield Key](https://docs.wield.co/farcaster/api) for reading Farcaster state: `WIELD_API_KEY`
4. `npm install`
5. `netlify dev`

## Testing

1. Run `netlify dev --live` will give [proxy your local machine](https://docs.netlify.com/cli/local-development/#share-a-live-development-server) to the *world* *wide* *web*.
2. Test that link in either:
    + The Warpcast Embed UI: https://warpcast.com/~/developers/embeds
    + The Frams.js hosted debugger: https://debugger.framesjs.org/debug
