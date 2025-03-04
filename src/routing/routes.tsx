import { HomePage } from '../pages/main/HomePage.tsx';
import { ThemePage } from '../pages/main/ThemePage.tsx';
import { ReactSectionPage } from '../pages/section/react/ReactSectionPage.tsx';
import { I18nMarkdownViewerWithAnchors } from '../components/I18nMarkdownViewerWithAnchors/I18nMarkdownViewerWithAnchors.tsx';

import type { RouteProps } from 'react-router';

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
