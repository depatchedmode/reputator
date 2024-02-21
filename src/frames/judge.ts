import { getRandomCast } from '../data/casts.js';
import { FrameActionDataParsed } from 'frames.js';
const html = String.raw;
import { setJudgement } from '../data/judgements.js';

export default {
  name: 'judge',
  logic: async (frameMessage: FrameActionDataParsed, frameContext) => {
    switch (frameMessage.buttonIndex) {
      case 1: // good
        await setJudgement(frameContext.searchParams.get('castHash'), frameMessage.requesterFid, 'positive');
        return `judge`;
      case 2: // re-roll
        await setJudgement(frameContext.searchParams.get('castHash'), frameMessage.requesterFid, 'neutral');
        return `judge`;
      case 3: // bad
        await setJudgement(frameContext.searchParams.get('castHash'), frameMessage.requesterFid, 'negative');
        return `judge`;
    }
  },
  content: async () => {
    const cast = await getRandomCast();
    return html`
      <frame-image src="https://client.warpcast.com/v2/og-image?castHash=${cast.hash}" />
      <frame-button>
        👍
      </frame-button>
      <frame-button>
        🤷‍♂️
      </frame-button>
      <frame-button>
        👎
      </frame-button>
      <frame-button action="link" target="https://warpcast.com/~/conversations/${cast.hash}">
        View Cast
      </frame-button>
      <frame-post-var name="castHash" value="${cast.hash}">
      </frame-post-var>
    `;
  },
}