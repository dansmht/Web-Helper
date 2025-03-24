import type { Language, Translations } from '../types/i18n.ts';

export const sharedTranslations: Record<Language, Translations> = {
  en: {
    welcome: 'Welcome, {{firstName}} {{lastName}}!',
    soon: 'Soon',
    try_again: 'Try again',
    back: 'Back',
    error: {
      something_went_wrong: 'Something went wrong',
    },
    language: {
      en: 'English',
      ru: 'Русский',
    },
    theme: {
      system: 'System',
      light: 'Light',
      dark: 'Dark',
      custom: 'Custom',
    },
  },
  ru: {
    welcome: 'Добро пожаловать, {{firstName}} {{lastName}}!',
    soon: 'Скоро',
    try_again: 'Попробуйте снова',
    back: 'Назад',
    error: {
      something_went_wrong: 'Что-то пошло не так',
    },
    language: {
      en: 'English',
      ru: 'Русский',
    },
    theme: {
      system: 'Системная',
      light: 'Светлая',
      dark: 'Темная',
      custom: 'Кастомная',
    },
  },
};
