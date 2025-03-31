import { translations } from '../../translations';

import type { Language, TFunction, Translations } from '../../types/i18n.ts';

let currentLanguage: Language = 'en';

export const setCurrentLanguage = (lang: Language) => {
  currentLanguage = lang;
};

export const translate: TFunction = (key, options = {}) => {
  const template = key
    .split('.')
    .reduce<string | Translations | undefined>((acc, segment) => {
      return typeof acc === 'object' && acc !== null ? acc[segment] : undefined;
    }, translations[currentLanguage]);

  if (typeof template !== 'string') {
    return key;
  }

  return template.replace(
    /{{(\w+)}}/g,
    (_, placeholder: string) => options[placeholder] || ''
  );
};
