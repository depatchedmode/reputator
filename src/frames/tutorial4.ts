import { FrameActionDataParsed } from 'frames.js';
const html = String.raw;

export default {
  name: 'tutorial5',
  logic: async (frameMessage: FrameActionDataParsed) => {
    switch (frameMessage.buttonIndex) {
      case 1:
        return `tutorial3`;
      case 2: // no    
        return `tutorialfeedback`;
      case 3: // yes
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
        No
      </frame-button>
      <frame-button>
        Yes
      </frame-button>
    `;
  },
}