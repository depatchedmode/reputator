import { getRandomCast } from '../data/casts.js';
import { FrameActionDataParsed } from 'frames.js';
const html = String.raw;

export default {
  name: 'judge',
  logic: async (frameMessage: FrameActionDataParsed) => {
    switch (frameMessage.buttonIndex) {
      case 1:
        return `poster`;
      case 2:
        return `judge`;
      case 3:
        return `judge`;
      case 4:
        return `judge`;
    }
  },
  content: async () => {
    const cast = await getRandomCast();
    return html`
      <frame-image src="https://client.warpcast.com/v2/og-image?castHash=${cast.hash}" />
      <frame-button>
        ⬅️
      </frame-button>
      <frame-button>
        👍
      </frame-button>
      <frame-button>
        🎲
      </frame-button>
      <frame-button>
        👎
      </frame-button>
    `;
  },
}