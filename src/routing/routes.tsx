import { HomePage } from '../pages/HomePage.tsx';
import { ReactSectionPage } from '../pages/ReactSection/ReactSectionPage.tsx';

import type { RouteProps } from 'react-router';

export const routes: RouteProps[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'react',
    element: <ReactSectionPage />,
  },
];
