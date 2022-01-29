import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { Icon } from '../shared/Icon/Icon';

export const Header: FC = () => (
  <header className="flex justify-between items-center">

    <Link to="/">
      <Icon variant="logo" />
    </Link>

    <div className="flex gap-3">
      <div title="Text size">
        <Icon variant="font-size" />
      </div>

      <Link to="bookmarks" title="Bookmarks">
        <Icon variant="bookmark" />
      </Link>

      <ThemeSwitcher title="Themes" />
    </div>

  </header>
);
