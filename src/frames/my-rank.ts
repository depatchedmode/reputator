import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
  name: 'my-rank',
  logic: async (msg: FrameActionDataParsed) => {
    switch (msg.buttonIndex) {
      case 1:
        return `poster`;
    }
  },
  content: () => html`
    <frame-image layout="main">
      You have a rank
    </frame-image>
    <frame-button>
      ⬅️ Back
    </frame-button>
    <frame-button action="link" target="https://github.com">
      View all rankings
    </frame-button>
  `
};
