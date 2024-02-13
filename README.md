# Reputator

A simple Frame for helping a Warpcast Channel's members rank the quality of contributions. 

**How:** 
1. You get shown a random cast from the channel
2. You give it a thumbs up or a thumbs down. 
3. Your judgement impacts that caster's reputation. The degree to which it contributes will depend on your own reputation.

Developed using `v0.8.3` of [`simplest-frame`](https://github.com/depatchedmode/simplest-frame)

## Todo

- [ ] Explore moving data storage to eg. FaunaDB so that it's queryable
- [ ] Define some sort of quorum requirement before a cast can be considered "judged"
- [ ] Improve sampling: We could store casts: castHash, judgements (counter). Would help us spot which casts need additional judgements.
- [ ] Leaderboard: show which casters are contributing the most "signal": fid, judgements (counter)
- [ ] 

- Post processing: hourly?
    - [ ] calculate all casters reputations - looks at something like EigenTrust

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
