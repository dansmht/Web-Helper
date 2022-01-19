import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import { App } from './App';

import { listenPreferredColorScheme } from './utils/theme';

import './assets/styles/index.css';

listenPreferredColorScheme();

hljs.registerLanguage('javascript', javascript);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
