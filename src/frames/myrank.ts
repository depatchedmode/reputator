import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
  name: 'myrank',
  logic: async (msg: FrameActionDataParsed) => {
    switch (msg.buttonIndex) {
      case 1:
        return `poster`;
    }
  },
  content: () => html`
    <frame-image layout="main">
      <div style="
        font-family: 'Redaction';
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        color: #F1E5FF;
        background: #11071C;
        align-items: center;
        justify-content: center;
        line-height: 1;
      ">
        <h1 style="font-size: 4rem">Coming soon...</h1>
        <h2 style="font-size: 2rem">See how the community has ranked your contributions</h2>
      </div>
    </frame-image>
    <frame-button>
      ⬅️ Back
    </frame-button>
    <frame-button action="link" target="https://github.com">
      View all rankings
    </frame-button>
  `
};
