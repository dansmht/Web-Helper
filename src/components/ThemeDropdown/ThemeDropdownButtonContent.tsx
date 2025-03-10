import { useTheme } from '../../context/theme/ThemeContext.tsx';
import { useSystemTheme } from '../../hooks/theme/useSystemTheme.ts';

import LightIcon from '../../assets/icons/theme/light.svg?react';
import DarkIcon from '../../assets/icons/theme/dark.svg?react';
import CustomIcon from '../../assets/icons/theme/custom.svg?react';

import type { Theme } from '../../types/themeTypes.ts';

const renderContent = (theme: Theme) => {
  switch (theme) {
    case 'light':
      return <LightIcon />;
    case 'dark':
      return <DarkIcon />;
    default:
      return <CustomIcon />;
  }
};

export const ThemeDropdownButtonContent = () => {
  const { theme } = useTheme();
  const systemTheme = useSystemTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const wrapperClassName = theme === 'system' ? '' : 'group active';

  return <div className={wrapperClassName}>{renderContent(currentTheme)}</div>;
};
