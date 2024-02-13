export default async (frameContent) => {
  const html = String.raw;
  const title = 'Reputator';
  const head = html`
    <style>
      @font-face {
        font-family: "Redaction";
        src:
          local("Redaction"),
          url("/fonts/Redaction-Regular") format("woff2");
      }
      :root {
        --background: #11071C;
        --text: #F1E5FF;
      }
      body {
        padding: 2rem;
        font-family: "Redaction";
        background: var(--background);
        color: var(--text);
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      figure {
        display: inline-block;
        margin: 0;
        max-width: 100%;
      }
      img {
        max-width: 100%;
        border: 4px inset var(--text);
      }
    </style>
  `

  const body = html`
    <h1>Reputator</h1>
    <h2>/degen Edition</h2>
    <figure>
        <img width="600" src="${frameContent.image}" />
    </figure>
    <h2>Coming soon...</h2>
    <p>Lists of the highest and lowest ranked contributors. First, we need to collect enough data! Help out by sharing your judgements.</p>
  `

  return {
    head,
    body,
    title
  };
}