import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
  name: 'credits',
  logic: (message: FrameActionDataParsed) => {
    if (message.buttonIndex == 1) {
      return `poster`
    }
  },
  content: () => html`
    <frame-image src="images/credits.png" />
    <frame-button>
      ⬅️ Back
    </frame-button>
    <frame-button action="link" target="https://github.com/depatchedmode/reputator">
      {😺} View on Github
    </frame-button>
  `
};
