import { component, useAtom, useState, useEffect } from '@dark-engine/core';
import * as Neutralino from '@neutralinojs/lib';
import octocat from './assets/githubLogo.svg';
import './App.css';

const App = component(() => {
  const [nlReady, setNlReady] = useState(false);
  const a$ = useAtom(0);

  useEffect(() => {
    const onReady = () => {
      setNlReady(true);
    };

    Neutralino.events.on('ready', onReady);

    return () => {
      Neutralino.events.off('ready', onReady);
    };
  }, []);

  return (
    <div className="App">
      <div className="bg starry"></div>
      <div className="card">
        <h1>Dark</h1>
        <a href="https://github.com/atellmer/dark" target="_blank">
          <img
            src={octocat}
            alt="GitHub"
            className={'logo'}
            title="Check out Dark on GitHub!"
          ></img>
        </a>
        <button onClick={() => a$.set((x) => x + 1)}>
          Count is {a$.val()}
        </button>
        {nlReady && (
          <button onClick={() => Neutralino.app.exit()}>Shutdown App</button>
        )}
      </div>
    </div>
  );
});

export { App };
