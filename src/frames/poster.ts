import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
  name: 'poster',
  logic: (message: FrameActionDataParsed) => {
    switch (message.buttonIndex) {
      case 1:
        return `judge`;
      case 2:
        return `pulse`;
      case 3:
        return `my-rank`;
      case 4:
        return `credits`;
    }
  },
  content: () => html`
    <frame-image src="${process.env.URL}/images/poster-animated.gif" />
    <frame-button>
      Start Judging
    </frame-button>
    <frame-button>
      Channel Pulse
    </frame-button>
    <frame-button>
      My Rank
    </frame-button>
    <frame-button>
      ℹ️
    </frame-button>
  `
};
