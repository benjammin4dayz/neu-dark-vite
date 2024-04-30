import { init } from '@neutralinojs/lib';
import { createRoot } from '@dark-engine/platform-browser';
import { createGlobalStyle } from '@dark-engine/styled';
import { App } from './App';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  body {
    font-family: sans-serif;
    padding: 0;
  }
`;

try {
  init();
} catch (err) {
  console.warn('Failed to initialize Neutralino.js', err);
}

const root = createRoot(document.getElementById('root')!);

root.render(
  // wrap root component in a fragment **with a GlobalStyle**,
  // otherwise hmr invalidation propagates and triggers a full page reload
  //
  <>
    <GlobalStyle />
    <App />
  </>
);
