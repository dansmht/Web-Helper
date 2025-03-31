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

export type NavigationInfo = {
  previousPage?: string;
  nextPage?: string;
  previousLabel?: string;
  nextLabel?: string;
};
