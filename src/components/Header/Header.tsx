import { FC } from 'react';

import { Logo } from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export const Header: FC = () => (
  <header className="flex justify-between items-center">
    <Logo />
    <nav>Nav</nav>
    <div>
      <ThemeSwitcher />
    </div>
  </header>
);
