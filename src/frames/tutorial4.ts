import { FrameActionDataParsed } from 'frames.js';
const html = String.raw;

export default {
  name: 'tutorial4',
  logic: async (frameMessage: FrameActionDataParsed) => {
    switch (frameMessage.buttonIndex) {
      case 1:
        return `tutorial3`;
      case 2: // re-roll      
        return `tutorial5`;
      case 3: // bad
        return `judge`;
    }
  },
  content: async () => {
    return html`
      <frame-image src="images/tutorial/4.png" />
      <frame-button>
        ⬅️ Back
      </frame-button>
      <frame-button>
        ➡️ Next
      </frame-button>
      <frame-button>
        ⤵️ Skip
      </frame-button>
    `;
  },
}