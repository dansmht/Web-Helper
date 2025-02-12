import { BrowserRouter } from 'react-router';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

import { Layout } from './components/Layout/Layout.tsx';
import { AppRouting } from './routing/AppRouting.tsx';

import 'highlight.js/styles/github-dark-dimmed.css';
import './assets/styles/index.css';

hljs.registerLanguage('typescript', typescript);

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouting />
      </Layout>
    </BrowserRouter>
  );
};
