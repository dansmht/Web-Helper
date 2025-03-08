export type Language = 'en' | 'ru';
export type Translations = {
  [key: string]: string | Translations;
};

export type TFunction = (
  key: string,
  options?: Record<string, string>
) => string;

export type I18nContextProps = {
  t: TFunction;
  changeLanguage: (lang: Language) => void;
  language: Language;
};
