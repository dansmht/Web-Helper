import type { Language, Translations } from '../types/i18n.ts';

export const sharedTranslations: Record<Language, Translations> = {
  en: {
    welcome: 'Welcome, {{firstName}} {{lastName}}!',
    soon: 'Soon',
    try_again: 'Try again',
    error: {
      something_went_wrong: 'Something went wrong',
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
    error: {
      something_went_wrong: 'Что-то пошло не так',
    },
    theme: {
      system: 'Системная',
      light: 'Светлая',
      dark: 'Темная',
      custom: 'Кастомная',
    },
  },
};
