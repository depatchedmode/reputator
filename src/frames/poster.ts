import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
  name: 'poster',
  logic: (message: FrameActionDataParsed) => {
    switch (message.buttonIndex) {
      case 1:
        console.log('tutorial 1!')
        return `tutorial1`;
      case 2:
        return `results`;
      case 3:
        return `credits`;
    }
  },
  content: () => html`
    <frame-image src="images/poster.png" />
    <frame-button>
      ⚖️ Judge
    </frame-button>
    <frame-button>
      ❤️‍🔥 Results
    </frame-button>
    <frame-button>
      ℹ️ Info
    </frame-button>
  `
};
