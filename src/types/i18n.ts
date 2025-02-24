export type Language = 'en' | 'ru';
export type Translations = Record<string, string>;

export type I18nContextProps = {
  t: (key: string, options?: Record<string, string>) => string;
  changeLanguage: (lang: Language) => void;
  language: Language;
};
