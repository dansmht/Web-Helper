import { LazyComponents, LazyPages } from './LazyModules.ts';

import type { RouteProps } from 'react-router';

export const routes: RouteProps[] = [
  {
    index: true,
    element: <LazyPages.home />,
  },
  {
    path: 'custom-theme',
    element: <LazyPages.theme />,
  },
  {
    path: 'react',
    element: <LazyPages.reactSection />,
  },
  {
    path: 'react/:topic',
    element: <LazyComponents.i18nMarkdownViewer section="react" />,
  },
  {
    path: 'architecture',
    element: <LazyPages.architectureSection />,
  },
  {
    path: 'architecture/:topic',
    element: <LazyComponents.i18nMarkdownViewer section="architecture" />,
  },
];
