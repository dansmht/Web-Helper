import { Route, Routes } from 'react-router';

import { routes } from './routes.tsx';

export const AppRouting = () => (
  <Routes>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Routes>
);
