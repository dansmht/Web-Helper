import { computeDropdownOptions } from '../../utils/dropdownUtils.tsx';

import EnFlagIcon from '../../assets/icons/language/great-britain-flag.svg?react';
import RuFlagIcon from '../../assets/icons/language/russia-flag.svg?react';

import type { DropdownOptionType } from '../../types/dropdownTypes.ts';
import type { Language } from '../../types/i18n.ts';

const languageOptions: DropdownOptionType<Language>[] = [
  { value: 'en', label: 'language.en', icon: <EnFlagIcon /> },
  { value: 'ru', label: 'language.ru', icon: <RuFlagIcon /> },
];

export const languageDropdownOptions = computeDropdownOptions(languageOptions);
