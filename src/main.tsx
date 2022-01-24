import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import { App } from './App';

import { listenPreferredColorScheme } from './utils/theme';

import './assets/styles/index.css';

listenPreferredColorScheme();

hljs.registerLanguage('javascript', javascript);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
