import { FC, useState } from 'react';

import { Popup } from '../shared/Popup/Popup';
import { PopupItem } from '../shared/Popup/PopupItem';

import { ColorScheme, ColorSchemeOrNull } from '../../utils/types/theme.types';
import { IconType } from '../../utils/types/icon.types';
import { colorSchemes, htmlClassList } from '../../utils/constants/theme.constants';

export const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') as ColorSchemeOrNull);

  const getThemeIcon = (theme: ColorSchemeOrNull): IconType => {
    if (theme === 'dark') return 'moon';
    if (theme === 'light') return 'sun';
    return 'system';
  };

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
    <Popup icon={getThemeIcon(theme)}>
      {({ close }) => (
        <>
          <PopupItem
            close={close}
            onClick={switchTheme(null)}
            icon="system"
            className={theme === null ? 'text-btn-secondary' : ''}
          >
            System
          </PopupItem>
          <PopupItem
            close={close}
            onClick={switchTheme('dark')}
            icon="moon"
            className={theme === 'dark' ? 'text-btn-secondary' : ''}
          >
            Dark
          </PopupItem>
          <PopupItem
            close={close}
            onClick={switchTheme('light')}
            icon="sun"
            className={theme === 'light' ? 'text-btn-secondary' : ''}
          >
            Light
          </PopupItem>
        </>
      )}
    </Popup>
  );
};
