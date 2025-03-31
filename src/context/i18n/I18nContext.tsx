import { createContext, useContext, useState } from 'react';

import { setCurrentLanguage, translate } from './i18nService.ts';
import { getSavedLanguage } from '../../utils/languageUtils.ts';
import { LocalStorageKeys } from '../../constants/localStorageKeys.ts';

import type { PropsWithChildren } from 'react';
import type { I18nContextProps, Language } from '../../types/i18n.ts';

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>(getSavedLanguage);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setCurrentLanguage(lang);
    localStorage.setItem(LocalStorageKeys.LANGUAGE, lang);
  };

  return (
    <I18nContext.Provider value={{ t: translate, changeLanguage, language }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
