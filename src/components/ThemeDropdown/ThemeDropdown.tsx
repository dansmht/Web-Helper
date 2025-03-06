import { Link } from 'react-router';
import { Dropdown } from '../Dropdown/Dropdown.tsx';
import { DropdownButtonContent } from './DropdownButtonContent.tsx';
import { useTheme } from '../../context/theme/ThemeContext.tsx';
import { useTranslation } from '../../context/i18n/I18nContext.tsx';

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
  { value: 'system', label: 'theme.system', icon: <SystemIcon /> },
  { value: 'light', label: 'theme.light', icon: <LightIcon /> },
  { value: 'dark', label: 'theme.dark', icon: <DarkIcon /> },
  {
    value: 'custom',
    label: 'theme.custom',
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  const Element: ElementType = linkTo ? Link : 'div';
  const elementProps = linkTo ? { to: linkTo } : {};

  return {
    value,
    element: (
      <Element {...elementProps} className="flex items-center space-x-2">
        {icon}
        <span>{t(label)}</span>
      </Element>
    ),
  };
};
