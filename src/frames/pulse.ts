import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
  name: 'pulse',
  logic: async (msg: FrameActionDataParsed) => {
    switch (msg.buttonIndex) {
      case 1:
        return `judge`;
    }
  },
  content: () => html`
    <frame-image layout="main">
      Pulse coming soon
    </frame-image>
    <frame-button>
      ⬅️ Back
    </frame-button>
    <frame-button action="link" target="https://github.com">
      Review Judgements
    </frame-button>
    <frame-button action="link" target="https://github.com">
      {} View Source
    </frame-button>
  `
};
