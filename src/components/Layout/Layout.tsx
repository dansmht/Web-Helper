import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Logo } from '../Logo/Logo';

export const Layout: FC = () => (
  <>
    <header>
      <Logo />
      Header
    </header>

    <Outlet />
  </>
);
