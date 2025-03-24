import { I18nMarkdownViewerWithAnchors } from '../../components/I18nMarkdownViewerWithAnchors/I18nMarkdownViewerWithAnchors.tsx';
import { BackButton } from '../../components/BackButton/BackButton.tsx';

export const MarkdownContentPage = () => {
  return (
    <div>
      <BackButton />

      <I18nMarkdownViewerWithAnchors />
    </div>
  );
};
