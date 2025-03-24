import type { SectionCardsData } from '../types/sectionCards.ts';

/** TODO rewrite titles to use them with translation
 * etc
 *   { title: 'section.react', to: '/react' },
 *   { title: 'section.web', to: '/web' },
 *   { title: 'section.architecture', to: '/architecture' },
 *
 *   { title: 'topic.virtual-dom', to: '/virtual-dom' },
 */
export const homePageData: SectionCardsData = {
  documentTitle: 'Web Helper',
  cardLinks: [
    { title: 'React', to: '/react' },
    { title: 'Web', to: '/web' },
    { title: 'Architecture', to: '/architecture' },
  ],
  cardSoonLinks: [{ title: 'JavaScript' }, { title: 'TypeScript' }],
};

export const reactSectionPageData = {
  documentTitle: 'React - Web Helper',
  cardLinks: [{ title: 'Virtual Dom', to: '/react/virtual-dom' }],
  cardSoonLinks: [],
};

export const webSectionPageData = {
  documentTitle: 'Web - Web Helper',
  cardLinks: [
    { title: 'Web page loading process', to: '/web/web-page-loading-process' },
  ],
  cardSoonLinks: [{ title: 'CORS' }],
};

export const architectureSectionPageData = {
  documentTitle: 'Architecture - Web Helper',
  cardLinks: [{ title: 'FSD', to: '/architecture/fsd' }],
  cardSoonLinks: [],
};
