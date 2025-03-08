import { computeDropdownOptions } from '../../utils/dropdownUtils.tsx';

import SystemIcon from '../../assets/icons/theme/system.svg?react';
import LightIcon from '../../assets/icons/theme/light.svg?react';
import DarkIcon from '../../assets/icons/theme/dark.svg?react';
import CustomIcon from '../../assets/icons/theme/custom.svg?react';

import type { DropdownOptionType } from '../../types/dropdownTypes.ts';
import type { Theme } from '../../types/themeTypes.ts';

const themeOptions: DropdownOptionType<Theme>[] = [
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

export const themeDropdownOptions = computeDropdownOptions(themeOptions);
