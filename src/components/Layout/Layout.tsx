import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '../Container/Container';
import { Header } from '../Header/Header';

export const Layout: FC = () => (
  <>
    <Header />

    <Container>
      <Outlet />
    </Container>
  </>
);
