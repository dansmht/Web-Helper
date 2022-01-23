import { useState } from 'react';

import { ThemeIcon } from './ThemeIcon/ThemeIcon';

import { ColorScheme, ColorSchemeOrNull } from '../../utils/types/theme.types';
import { colorSchemes, htmlClassList } from '../../utils/constants/theme.constants';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') as ColorSchemeOrNull);

  const switchTheme = (newTheme: ColorSchemeOrNull) => () => {
    if (newTheme === theme) return;

    if (newTheme) {
      // if newTheme is not system preferred
      localStorage.setItem('theme', newTheme);
      htmlClassList.remove(...colorSchemes);
      htmlClassList.add(newTheme);
    } else {
      // if newTheme is system preferred
      localStorage.removeItem('theme');
      htmlClassList.remove(theme as ColorScheme);

      if (!window.matchMedia('(prefers-color-scheme: light)').matches) {
        htmlClassList.add('dark');
      } else {
        htmlClassList.add('light');
      }
    }

    setTheme(newTheme);
  };

  return (
    <div className="relative">
      <button type="button">
        <ThemeIcon theme={theme} />
      </button>
      <ul className="absolute w-36 py-1 top-full mt-4 right-2 z-20 bg-secondary text-secondary rounded-lg ring-2 ring-color shadow-lg shadow-color">
        <li>
          <button
            type="button"
            onClick={switchTheme(null)}
            className={`flex items-center gap-2 py-2 px-3.5 w-full hover:bg-primary focus:bg-primary focus:outline-1 rounded-md ${theme === null ? 'text-btn-secondary' : ''}`}
          >
            <ThemeIcon theme={null} />
            System
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={switchTheme('dark')}
            className={`flex items-center gap-2 py-2 px-3.5 w-full hover:bg-primary focus:bg-primary focus:outline-1 rounded-md ${theme === 'dark' ? 'text-btn-secondary' : ''}`}
          >
            <ThemeIcon theme="dark" />
            Dark
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={switchTheme('light')}
            className={`flex items-center gap-2 py-2 px-3.5 w-full hover:bg-primary focus:bg-primary focus:outline-1 rounded-md ${theme === 'light' ? 'text-btn-secondary' : ''}`}
          >
            <ThemeIcon theme="light" />
            Light
          </button>
        </li>
      </ul>
    </div>
  );
};
