import { createContext, useContext, useState } from 'react';

import { translations } from '../../translations';

import type { PropsWithChildren } from 'react';
import type { I18nContextProps, Language } from '../../types/i18n.ts';

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, options: Record<string, string> = {}): string => {
    const template = translations[language][key] || key;
    return template.replace(
      /{{(\w+)}}/g,
      (_, placeholder: string) => options[placeholder] || ''
    );
  };

  const changeLanguage = (lang: Language) => setLanguage(lang);

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
