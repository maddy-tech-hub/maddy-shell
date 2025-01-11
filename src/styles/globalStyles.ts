import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] body {
    --gradient-from: #1c1e20;
    --gradient-to: #0d1117;
    --color-rgb: 255 255 255;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] body {
    --gradient-from: #e5eaf0;
    --gradient-to: #fff;
    --color-rgb: 0 0 0;
  }
  body {
    font-size: 14px;
    margin: 0;
    padding: 0;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    min-height: 100vh;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      top: 0px;
      --gradient-stops: var(--gradient-from),var(--gradient-to);
      background-image: linear-gradient(to bottom,var(--gradient-stops));
    }
  }
  html {
    min-height: 100%;
  }
  * {
    box-sizing: border-box;
  }
`;
