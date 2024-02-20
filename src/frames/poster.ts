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
        return `myrank`;
      case 4:
        return `credits`;
    }
  },
  content: () => html`
    <frame-image src="images/poster.png" />
    <frame-button>
      ⚖️ Judge
    </frame-button>
    <frame-button>
      ❤️‍🔥 Pulse
    </frame-button>
    <frame-button>
      🫵 You
    </frame-button>
    <frame-button>
      ℹ️ Info
    </frame-button>
  `
};
