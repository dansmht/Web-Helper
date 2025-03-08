import { createContext, useContext, useState } from 'react';

import { getSavedLanguage } from '../../utils/languageUtils.ts';
import { translations } from '../../translations';
import { LocalStorageKeys } from '../../constants/localStorageKeys.ts';

import type { PropsWithChildren } from 'react';
import type {
  I18nContextProps,
  Language,
  TFunction,
  Translations,
} from '../../types/i18n.ts';

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>(getSavedLanguage);

  const t: TFunction = (key, options = {}) => {
    const template = key
      .split('.')
      .reduce<string | Translations | undefined>((acc, segment) => {
        return typeof acc === 'object' && acc !== null
          ? acc[segment]
          : undefined;
      }, translations[language]);

    if (typeof template !== 'string') {
      return key;
    }

    return template.replace(
      /{{(\w+)}}/g,
      (_, placeholder: string) => options[placeholder] || ''
    );
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem(LocalStorageKeys.LANGUAGE, lang);
  };

  return (
    <I18nContext.Provider value={{ t, changeLanguage, language }}>
      {children}
    </I18nContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
