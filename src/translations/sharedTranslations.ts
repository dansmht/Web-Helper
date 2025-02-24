import type { Language, Translations } from '../types/i18n.ts';

export const sharedTranslations: Record<Language, Translations> = {
  en: {
    welcome: 'Welcome, {{firstName}} {{lastName}}!',
  },
  ru: {
    welcome: 'Добро пожаловать, {{firstName}} {{lastName}}!',
  },
};
