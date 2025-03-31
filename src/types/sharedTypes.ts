export type Section =
  | 'react'
  | 'typescript'
  | 'javascript'
  | 'architecture'
  | 'web';

export type PageIdentifier = Section | 'index';

export type AnchorLink = {
  id: string;
  text: string;
  spacing: boolean;
};
