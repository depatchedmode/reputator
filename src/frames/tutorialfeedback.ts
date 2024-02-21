import { FrameActionDataParsed } from 'frames.js';
const html = String.raw;

export default {
  name: 'tutorialfeedback',
  logic: async (frameMessage: FrameActionDataParsed) => {
    switch (frameMessage.buttonIndex) {
      case 1:
        return `poster`;
      case 2:
        return `tutorial5`;
    }
  },
  content: async () => {
    return html`
      <frame-image src="images/tutorial/feedback.png" />
      <frame-button>
        🏚️ Home
      </frame-button>
      <frame-button>
        ⬅️ Back
      </frame-button>
      <frame-button action="link" target="https://warpcast.com/depatchedmode/0x69fe49d3">
        💬 Feedback
      </frame-button>
    `;
  },
}