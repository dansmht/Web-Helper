import { lazy } from 'react';

import type { RouteProps } from 'react-router';

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

export const routes: RouteProps[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'custom-theme',
    element: <ThemePage />,
  },
  {
    path: 'react',
    element: <ReactSectionPage />,
  },
  {
    path: 'react/:topic',
    element: <I18nMarkdownViewerWithAnchors section="react" />,
  },
];
