import { FrameActionDataParsed } from 'frames.js';
const html = String.raw;

export default {
  name: 'tutorial5',
  logic: async (frameMessage: FrameActionDataParsed) => {
    switch (frameMessage.buttonIndex) {
      case 1:
        return `tutorial4`;
      case 2: // re-roll      
        return `judge`;
      case 3: // bad
        return `tutorialfeedback`;
    }
  },
  content: async () => {
    return html`
      <frame-image src="images/tutorial/5.png" />
      <frame-button>
        ⬅️ Back
      </frame-button>
      <frame-button>
        No
      </frame-button>
      <frame-button>
        Yes
      </frame-button>
    `;
  },
}