import { HomePage } from '../pages/main/HomePage.tsx';
import { ThemePage } from '../pages/main/ThemePage.tsx';
import { ReactSectionPage } from '../pages/section/react/ReactSectionPage.tsx';
import { I18nMarkdownViewer } from '../components/I18nMarkdownViewer/I18nMarkdownViewer.tsx';

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
    element: <I18nMarkdownViewer />,
  },
];
