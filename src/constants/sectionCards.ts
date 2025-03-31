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
    { title: 'React', to: '/react' },
    { title: 'Web', to: '/web' },
    { title: 'Architecture', to: '/architecture' },
    { title: 'JavaScript' },
    { title: 'TypeScript' },
  ],
  disableFilter: true,
};

const reactPageData: SectionCardsData = {
  documentTitle: 'React - Web Helper',
  cards: [{ title: 'Virtual Dom', to: '/react/virtual-dom' }],
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
    { title: 'Web page loading process', to: '/web/web-page-loading-process' },
    { title: 'CORS' },
  ],
};

const architecturePageData: SectionCardsData = {
  documentTitle: 'Architecture - Web Helper',
  cards: [
    { title: 'FSD', to: '/architecture/fsd' },
    { title: 'FSD1', to: '/architecture/fsd1' },
    { title: 'FSD2', to: '/architecture/fsd2' },
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
