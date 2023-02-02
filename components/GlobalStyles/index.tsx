import { createGlobalStyle } from 'styled-components';

// :root {
//   --bg-primary: #f3f4f5;
//   --bg-secondary: #e3e3e3;
//   --fg: #000;
// }

// #191919
// #1c1d1c

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #f3f4f5;
    --bg-secondary: #e3e3e3;
    --bg-header: #111111;
    --fg: #000;
  }

  [data-theme="dark"] {
    --bg-primary: #202020;
    --bg-secondary: #1e1e1e;
    --fg: #fff;
  }

  html,
  body {
    min-height: 100vh;
    color: var(--fg);
    background: var(--bg-primary);
    transition: background 0.5s ease;
    z-index: 0;
  }
  body {
    min-height: 200vh;
    overflow-x: hidden;
  }
  a:hover,
  button:hover {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
