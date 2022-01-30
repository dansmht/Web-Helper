import { Routes, Route } from 'react-router-dom';

import { Layout } from '../Layout/Layout';
import { HomePage } from '../../pages/Home/HomePage/HomePage';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>
  </Routes>
);
