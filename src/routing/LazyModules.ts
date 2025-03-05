import { lazyLoad } from '../utils/lazyLoad.tsx';

export const LazyPages = {
  home: lazyLoad('../pages/main/HomePage.tsx'),
  theme: lazyLoad('../pages/main/ThemePage.tsx'),
  reactSection: lazyLoad('../pages/section/react/ReactSectionPage'),
};

export const LazyComponents = {
  i18nMarkdownViewer: lazyLoad(
    '../components/I18nMarkdownViewerWithAnchors/I18nMarkdownViewerWithAnchors'
  ),
};
