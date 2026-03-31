import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap');

  html {
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background:
      radial-gradient(circle at top left, rgba(17, 126, 255, 0.1), transparent 28%),
      radial-gradient(circle at top right, rgba(25, 184, 155, 0.08), transparent 24%),
      linear-gradient(180deg, #f4f7fb 0%, #eef3fb 100%);
    color: #0d1b33;
    font-family: 'DM Sans', 'Segoe UI', sans-serif;
    font-size: 15px;
    line-height: 1.6;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at 15% 15%, rgba(17, 126, 255, 0.08), transparent 22%),
      radial-gradient(circle at 85% 20%, rgba(255, 142, 95, 0.08), transparent 18%),
      radial-gradient(circle at 50% 100%, rgba(25, 184, 155, 0.08), transparent 22%);
    z-index: 0;
  }

  #root {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
    letter-spacing: -0.02em;
  }

  a,
  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    font-family: inherit;
  }
`;
