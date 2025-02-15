import { useTheme } from '../../context/theme/ThemeContext.tsx';
import { useSystemTheme } from '../../hooks/theme/useSystemTheme.ts';

import LightIcon from '../../assets/icons/light.svg?react';
import DarkIcon from '../../assets/icons/dark.svg?react';

export const DropdownButtonContent = () => {
  const { theme } = useTheme();
  const systemTheme = useSystemTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const wrapperClassName = theme !== 'system' ? 'group active' : '';

  const renderContent = () => {
    switch (currentTheme) {
      case 'light':
        return <LightIcon />;
      case 'dark':
        return <DarkIcon />;
      default:
        return 'Custom'; // TODO
    }
  };

  return <div className={wrapperClassName}>{renderContent()}</div>;
};
