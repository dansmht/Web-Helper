import { Dropdown } from '../Dropdown/Dropdown.tsx';
import { ThemeDropdownButtonContent } from './ThemeDropdownButtonContent.tsx';
import { useTheme } from '../../context/theme/ThemeContext.tsx';

import { themeDropdownOptions } from '../../constants/theme/themeDropdownOptions.tsx';

import type { Theme } from '../../types/themeTypes.ts';

export const ThemeDropdown = () => {
  const { updateTheme } = useTheme();

  const handleSelect = (theme: Theme) => {
    if (theme !== 'custom') updateTheme(theme);
  };

  return (
    <Dropdown
      options={themeDropdownOptions}
      onSelect={handleSelect}
      buttonContent={<ThemeDropdownButtonContent />}
    />
  );
};
