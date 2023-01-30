import { createGlobalStyle } from 'styled-components';

// :root {
//   --bg-primary: #f3f4f5;
//   --bg-secondary: #e3e3e3;
//   --fg: #000;
// }

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #f3f4f5;
    --bg-secondary: #181818;
    --fg: #000;
  }

  [data-theme="dark"] {
    --bg-primary: #181818;
    --bg-secondary: #121212;
    --fg: #fff;
  }

  html,
  body {
    min-height: 100vh;
    color: var(--fg);
    background: var(--bg-primary);
    transition: background-color 0.5s ease;
  }
  body {
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
