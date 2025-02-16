import { Link } from 'react-router';
import { Dropdown } from '../Dropdown/Dropdown.tsx';
import { DropdownButtonContent } from './DropdownButtonContent.tsx';
import { useTheme } from '../../context/theme/ThemeContext.tsx';

import SystemIcon from '../../assets/icons/system.svg?react';
import LightIcon from '../../assets/icons/light.svg?react';
import DarkIcon from '../../assets/icons/dark.svg?react';
import CustomIcon from '../../assets/icons/custom.svg?react';

import type { ElementType, ReactNode } from 'react';
import type { Theme } from '../../types/themeTypes.ts';

type ThemeOption = {
  value: Theme;
  label: string;
  icon: ReactNode;
  linkTo?: string;
};

const themeOptions: ThemeOption[] = [
  { value: 'system', label: 'System', icon: <SystemIcon /> },
  { value: 'light', label: 'Light', icon: <LightIcon /> },
  { value: 'dark', label: 'Dark', icon: <DarkIcon /> },
  {
    value: 'custom',
    label: 'Custom',
    icon: <CustomIcon />,
    linkTo: '/custom-theme',
  },
];

export const ThemeDropdown = () => {
  const { updateTheme } = useTheme();

  const handleSelect = (theme: Theme) => {
    if (theme !== 'custom') updateTheme(theme);
  };

  return (
    <Dropdown
      options={themeOptions.map(createDropdownOption)}
      onSelect={handleSelect}
      buttonContent={<DropdownButtonContent />}
    />
  );
};

const createDropdownOption = ({ value, label, icon, linkTo }: ThemeOption) => {
  const Element: ElementType = linkTo ? Link : 'div';
  const elementProps = linkTo ? { to: linkTo } : {};

  return {
    value,
    element: (
      <Element {...elementProps} className="flex items-center space-x-2">
        {icon}
        <span>{label}</span>
      </Element>
    ),
  };
};
