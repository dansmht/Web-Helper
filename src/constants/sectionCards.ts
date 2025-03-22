import type { SectionCardsData } from '../types/sectionCards.ts';

export const homePageData: SectionCardsData = {
  documentTitle: 'Web Helper',
  cardLinks: [
    { title: 'React', to: '/react' },
    { title: 'Architecture', to: '/architecture' },
  ],
  cardSoonLinks: [{ title: 'JavaScript' }, { title: 'TypeScript' }],
};

export const reactSectionPageData = {
  documentTitle: 'React - Web Helper',
  cardLinks: [{ title: 'Virtual Dom', to: '/react/virtual-dom' }],
  cardSoonLinks: [],
};

export const architectureSectionPageData = {
  documentTitle: 'Architecture - Web Helper',
  cardLinks: [{ title: 'FSD', to: '/architecture/fsd' }],
  cardSoonLinks: [],
};
