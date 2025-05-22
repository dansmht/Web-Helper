import type { SectionCardsData } from '../types/sectionCards.ts';
import type { PageIdentifier } from '../types/sharedTypes.ts';

/** TODO rewrite titles to use them with translation
 * etc
 *   { title: 'section.react', to: '/react' },
 *   { title: 'section.web', to: '/web' },
 *   { title: 'section.architecture', to: '/architecture' },
 *
 *   { title: 'topic.virtual-dom', to: '/virtual-dom' },
 */
const homePageData: SectionCardsData = {
  documentTitle: 'Web Helper',
  cards: [
    { id: 'react', title: 'React', to: '/react' },
    { id: 'web', title: 'Web', to: '/web' },
    { id: 'architecture', title: 'Architecture', to: '/architecture' },
    { id: 'javascript', title: 'JavaScript' },
    { id: 'typescript', title: 'TypeScript' },
  ],
  disableFilter: true,
};

const reactPageData: SectionCardsData = {
  documentTitle: 'React - Web Helper',
  cards: [{ id: '', title: 'Virtual Dom', to: '/react/virtual-dom' }],
};

const typescriptPageData: SectionCardsData = {
  documentTitle: 'TypeScript - Web Helper',
  cards: [],
};

const javascriptPageData: SectionCardsData = {
  documentTitle: 'JavaScript - Web Helper',
  cards: [],
};

const webPageData: SectionCardsData = {
  documentTitle: 'Web - Web Helper',
  cards: [
    {
      id: 'web-page-loading-process',
      title: 'Web page loading process',
      to: '/web/web-page-loading-process',
    },
    { id: 'cors', title: 'CORS' },
  ],
};

const architecturePageData: SectionCardsData = {
  documentTitle: 'Architecture - Web Helper',
  cards: [
    { id: 'fsd', title: 'FSD', to: '/architecture/fsd' },
    { id: 'fsd-1', title: 'FSD1', to: '/architecture/fsd1' },
    { id: 'fsd-2', title: 'FSD2', to: '/architecture/fsd2' },
  ],
};

export const sectionPagesData: Record<PageIdentifier, SectionCardsData> = {
  index: homePageData,
  react: reactPageData,
  typescript: typescriptPageData,
  javascript: javascriptPageData,
  architecture: architecturePageData,
  web: webPageData,
};
