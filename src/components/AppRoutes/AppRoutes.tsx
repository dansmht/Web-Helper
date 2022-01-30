import { Routes, Route } from 'react-router-dom';

import { Layout } from '../Layout/Layout';
import { HomePage } from '../../pages/Home/HomePage/HomePage';
import { Technologies } from '../../pages/Navigation/Technologies/Technologies';

import { technologies } from '../../utils/constants/technologies.constants';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />

      <Route path="technologies">
        <Route index element={<Technologies />} />

        {technologies.map(({
          element: Component, path, name, subsections,
        }) => (
          <Route key={name} path={path}>
            <Route index element={<Component />} />

            {subsections.map(({
              element: Component, path, name,
            }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}
          </Route>
        ))}

      </Route>

    </Route>
  </Routes>
);
