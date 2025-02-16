import { Container } from '../Container/Container.tsx';
import { Header } from '../Header/Header.tsx';

import type { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => (
  <div className="bg-bg-secondary text-text-primary transition-smooth flex-auto">
    <Container>
      <Header />
      {children}
    </Container>
  </div>
);
