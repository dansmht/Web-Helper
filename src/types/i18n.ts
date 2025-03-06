export type Language = 'en' | 'ru';
export type Translations = {
  [key: string]: string | Translations;
};

export type I18nContextProps = {
  t: (key: string, options?: Record<string, string>) => string;
  changeLanguage: (lang: Language) => void;
  language: Language;
};
