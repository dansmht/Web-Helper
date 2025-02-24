import { sharedTranslations } from './sharedTranslations.ts';

import type { Language, Translations } from '../types/i18n.ts';

export const translations: Record<Language, Translations> = {
  en: {
    ...sharedTranslations.en,
  },
  ru: {
    ...sharedTranslations.ru,
  },
};
