import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Default background color for all routes */
  body {
    background-color: #f4f8fb;
    font-size: 14px;
    margin: 0;
    padding: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    min-height: 100vh;  /* Ensures body covers at least 100% of the viewport height */
    display: flex;
    flex-direction: column;  /* To make sure child elements are arranged properly */
  }

  /* Adjust for dark and light mode gradients */
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

  html {
    min-height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  /* Background image logic */
  body::before {
    content: "";
    position: absolute;
    width: 100%;
    top: 0px;
    --gradient-stops: var(--gradient-from), var(--gradient-to);
    background-image: linear-gradient(to bottom, var(--gradient-stops));
  }
`;
