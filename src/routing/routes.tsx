import { lazy } from 'react';

import { sectionPagesData } from '../constants/sectionCards.ts';

import type { RouteProps } from 'react-router';

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

const MarkdownContentPage = lazy(() =>
  import('../pages/MarkdownContentPage/MarkdownContentPage.tsx').then(
    (module) => ({
      default: module.MarkdownContentPage,
    })
  )
);

export const routes: RouteProps[] = [
  {
    index: true,
    element: <SectionCardsPage {...sectionPagesData.index} />,
  },
  {
    path: 'custom-theme',
    element: <ThemePage />,
  },
  {
    path: 'react',
    element: <SectionCardsPage {...sectionPagesData.react} />,
  },
  {
    path: 'web',
    element: <SectionCardsPage {...sectionPagesData.web} />,
  },
  {
    path: 'architecture',
    element: <SectionCardsPage {...sectionPagesData.architecture} />,
  },
  {
    path: ':section/:topic',
    element: <MarkdownContentPage />,
  },
];
