import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/main/HomePage.tsx').then((module) => ({
    default: module.HomePage,
  }))
);

const ThemePage = lazy(() =>
  import('../pages/main/ThemePage.tsx').then((module) => ({
    default: module.ThemePage,
  }))
);

const ReactSectionPage = lazy(() =>
  import('../pages/section/react/ReactSectionPage.tsx').then((module) => ({
    default: module.ReactSectionPage,
  }))
);

const I18nMarkdownViewerWithAnchors = lazy(() =>
  import(
    '../components/I18nMarkdownViewerWithAnchors/I18nMarkdownViewerWithAnchors.tsx'
  ).then((module) => ({
    default: module.I18nMarkdownViewerWithAnchors,
  }))
);

export const LazyPages = {
  home: HomePage,
  theme: ThemePage,
  reactSection: ReactSectionPage,
};

export const LazyComponents = {
  i18nMarkdownViewer: I18nMarkdownViewerWithAnchors,
};
