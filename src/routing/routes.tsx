import { lazyLoad } from '../utils/lazyLoad.tsx';

import type { RouteProps } from 'react-router';

const HomePage = lazyLoad('../pages/main/HomePage.tsx');
const ThemePage = lazyLoad('../pages/main/ThemePage.tsx');
const ReactSectionPage = lazyLoad('../pages/section/react/ReactSectionPage');
const I18nMarkdownViewerWithAnchors = lazyLoad(
  '../components/I18nMarkdownViewerWithAnchors/I18nMarkdownViewerWithAnchors'
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
