export type SectionCard = {
  id: string;
  title: string;
  to?: string;
};

export type SectionCardsData = {
  documentTitle: string;
  cards: SectionCard[];
  disableFilter?: boolean;
};
