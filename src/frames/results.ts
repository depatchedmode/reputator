import { FrameActionDataParsed } from "frames.js";
const html = String.raw;

export default {
  name: 'results',
  logic: async (msg: FrameActionDataParsed) => {
    switch (msg.buttonIndex) {
      case 1:
        return `poster`;
      case 2:
        return `pulse`;
      case 3:
        return `myrank`;
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
        <h2 style="font-size: 2rem">An overview of reputator interactions for this channel</h2>
      </div>
    </frame-image>
    <frame-button>
      🏚️ Home
    </frame-button>
    <frame-button>
      ❤️‍🔥 Channel
    </frame-button>
    <frame-button>
      🫵 You
    </frame-button>
  `
};
