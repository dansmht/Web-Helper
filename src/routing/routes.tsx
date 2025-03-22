import { LazyComponents, LazyPages } from './LazyModules.ts';

import {
  architectureSectionPageData,
  homePageData,
  reactSectionPageData,
} from '../constants/sectionCards.ts';

import type { RouteProps } from 'react-router';

export const routes: RouteProps[] = [
  {
    index: true,
    element: <LazyPages.sectionCards {...homePageData} />,
  },
  {
    path: 'custom-theme',
    element: <LazyPages.theme />,
  },
  {
    path: 'react',
    element: <LazyPages.sectionCards {...reactSectionPageData} />,
  },
  {
    path: 'react/:topic',
    element: <LazyComponents.i18nMarkdownViewer section="react" />,
  },
  {
    path: 'architecture',
    element: <LazyPages.sectionCards {...architectureSectionPageData} />,
  },
  {
    path: 'architecture/:topic',
    element: <LazyComponents.i18nMarkdownViewer section="architecture" />,
  },
];
