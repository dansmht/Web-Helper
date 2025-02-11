import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

import { App } from './App.tsx';

import 'highlight.js/styles/github-dark-dimmed.css';
import './index.css';

hljs.registerLanguage('typescript', typescript);

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
