import { BrowserRouter } from 'react-router';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

import { ThemeProvider } from './context/theme/ThemeContext.tsx';
import { I18nProvider } from './context/i18n/I18nContext.tsx';
import { Layout } from './components/Layout/Layout.tsx';
import { AppRouting } from './routing/AppRouting.tsx';
import { loadTheme } from './utils/themeUtils.ts';

import 'highlight.js/styles/github-dark-dimmed.css';
import './assets/styles/index.css';

hljs.registerLanguage('typescript', typescript);

loadTheme();

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <I18nProvider>
          <Layout>
            <AppRouting />
          </Layout>
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
