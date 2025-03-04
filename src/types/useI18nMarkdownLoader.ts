import type { Section } from './sharedTypes.ts';
import type { Language } from './i18n.ts';

export type I18nMarkdownLoaderParams = {
  section: Section;
  fileName: string;
  language: Language;
};

export type MarkdownLoaderState = {
  content: string | null;
  error: string | null;
  isLoading: boolean;
};
