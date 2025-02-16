import { HomePage } from '../pages/main/HomePage.tsx';
import { ThemePage } from '../pages/main/ThemePage.tsx';
import { ReactSectionPage } from '../pages/section/react/ReactSectionPage.tsx';

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
];
