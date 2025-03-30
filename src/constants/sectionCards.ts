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
  cards: [
    { title: 'React', to: '/react' },
    { title: 'Web', to: '/web' },
    { title: 'Architecture', to: '/architecture' },
    { title: 'JavaScript' },
    { title: 'TypeScript' },
  ],
  disableFilter: true,
};

export const reactSectionPageData: SectionCardsData = {
  documentTitle: 'React - Web Helper',
  cards: [{ title: 'Virtual Dom', to: '/react/virtual-dom' }],
};

export const webSectionPageData: SectionCardsData = {
  documentTitle: 'Web - Web Helper',
  cards: [
    { title: 'Web page loading process', to: '/web/web-page-loading-process' },
    { title: 'CORS' },
  ],
};

export const architectureSectionPageData: SectionCardsData = {
  documentTitle: 'Architecture - Web Helper',
  cards: [{ title: 'FSD', to: '/architecture/fsd' }],
};
