import { computeDropdownOptions } from '../../utils/dropdownUtils.tsx';

import EnIcon from '../../assets/icons/language/en.svg?react';
import RuIcon from '../../assets/icons/language/ru.svg?react';

import type { DropdownOptionType } from '../../types/dropdownTypes.ts';
import type { Language } from '../../types/i18n.ts';

const languageOptions: DropdownOptionType<Language>[] = [
  { value: 'en', label: 'language.en', icon: <EnIcon /> },
  { value: 'ru', label: 'language.ru', icon: <RuIcon /> },
];

export const languageDropdownOptions = computeDropdownOptions(languageOptions);
