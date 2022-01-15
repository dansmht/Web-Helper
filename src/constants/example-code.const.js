export const exampleCode = `import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import App from './App';

import './index.css';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('javascript', javascript);
console.log('hljs', hljs);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);`;
