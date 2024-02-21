import { FrameActionDataParsed } from 'frames.js';
const html = String.raw;

export default {
  name: 'tutorial1',
  logic: async (frameMessage: FrameActionDataParsed) => {
    switch (frameMessage.buttonIndex) {
      case 1:
        return `poster`;
      case 2: // re-roll      
        return `tutorial2`;
      case 3: // bad
        return `judge`;
    }
  },
  content: async () => html`
      <frame-image src="images/tutorial/1.png" />
      <frame-button>
        ⬅️ Back
      </frame-button>
      <frame-button>
        ➡️ Next
      </frame-button>
      <frame-button>
        ⤵️ Skip
      </frame-button>
    `,
}