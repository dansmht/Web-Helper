import { lazy } from 'react';

const SectionCardsPage = lazy(() =>
  import('../pages/SectionCardsPage/SectionCardsPage.tsx').then((module) => ({
    default: module.SectionCardsPage,
  }))
);

const ThemePage = lazy(() =>
  import('../pages/ThemePage/ThemePage.tsx').then((module) => ({
    default: module.ThemePage,
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
  sectionCards: SectionCardsPage,
  theme: ThemePage,
};

export const LazyComponents = {
  i18nMarkdownViewer: I18nMarkdownViewerWithAnchors,
};
