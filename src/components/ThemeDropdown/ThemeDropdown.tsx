import { Dropdown } from '../Dropdown/Dropdown.tsx';
import { DropdownButtonContent } from './DropdownButtonContent.tsx';
import { useTheme } from '../../context/theme/ThemeContext.tsx';

import SystemIcon from '../../assets/icons/system.svg?react';
import LightIcon from '../../assets/icons/light.svg?react';
import DarkIcon from '../../assets/icons/dark.svg?react';

import type { ReactNode } from 'react';
import type { Theme } from '../../types/themeTypes.ts';

type ThemeOption = {
  value: Theme;
  label: string;
  icon: ReactNode;
};

const themeOptions: ThemeOption[] = [
  { value: 'system', label: 'System', icon: <SystemIcon /> },
  { value: 'light', label: 'Light', icon: <LightIcon /> },
  { value: 'dark', label: 'Dark', icon: <DarkIcon /> },
];

export const ThemeDropdown = () => {
  const { updateTheme } = useTheme();

  const handleSelect = (theme: Theme) => {
    if (theme === 'custom') {
      // TODO Redirect
      return;
    }
    updateTheme(theme);
  };

  const dropdownOptions = themeOptions.map(({ value, label, icon }) => ({
    value,
    element: (
      <div className="flex items-center space-x-2">
        {icon}
        <span>{label}</span>
      </div>
    ),
  }));

  return (
    <Dropdown
      options={dropdownOptions}
      onSelect={handleSelect}
      buttonContent={<DropdownButtonContent />}
    />
  );
};
