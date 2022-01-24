import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/Home/HomePage/HomePage';

import { Layout } from '../Layout/Layout';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={(
          <>
            <ThemeSwitcher />
            <HomePage />
          </>
        )}
      />
    </Route>
  </Routes>
);
