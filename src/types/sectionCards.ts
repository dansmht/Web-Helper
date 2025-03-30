export type SectionCardsData = {
  documentTitle: string;
  cards: {
    title: string;
    to?: string;
  }[];
  disableFilter?: boolean;
};
