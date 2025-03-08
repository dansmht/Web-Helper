import { defaultLanguage } from '../constants/language/languageConstants.ts';
import { LocalStorageKeys } from '../constants/localStorageKeys.ts';

import type { Language } from '../types/i18n.ts';

export const getLanguageFromLocalStorage = () =>
  localStorage.getItem(LocalStorageKeys.LANGUAGE) as Language | null;

export const getSavedLanguage = (): Language => {
  const savedLanguage = getLanguageFromLocalStorage();
  const validLanguages: Language[] = ['en', 'ru'];

  return savedLanguage && validLanguages.includes(savedLanguage)
    ? savedLanguage
    : defaultLanguage;
};
