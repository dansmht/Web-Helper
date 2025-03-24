import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import { AnchorList } from '../AnchorList/AnchorList.tsx';
import { useI18nMarkdownLoader } from '../../hooks/markdown/useI18nMarkdownLoader.ts';
import { useMarkdownAnchors } from '../../hooks/markdown/useMarkdownAnchors.ts';
import { useTranslation } from '../../context/i18n/I18nContext.tsx';
import { useTheme } from '../../context/theme/ThemeContext.tsx';
import { useSystemTheme } from '../../hooks/theme/useSystemTheme.ts';
import { isEfficientTheme } from '../../utils/themeUtils.ts';

import type { Section } from '../../types/sharedTypes.ts';
import { useScrollToHash } from '../../hooks/markdown/useScrollToHash.ts';

export const I18nMarkdownViewerWithAnchors = () => {
  const { section = '' as Section, topic: fileName = '' } = useParams<{
    section: Section;
    topic: string;
  }>();
  const { language } = useTranslation();
  const { theme } = useTheme();
  const systemTheme = useSystemTheme();

  const { content, error, isLoading } = useI18nMarkdownLoader({
    section,
    fileName,
    language,
  });

  const { anchors, ref } = useMarkdownAnchors(content);

  useScrollToHash(ref);

  const computedTheme = isEfficientTheme(theme) ? theme : systemTheme;
  const wrapperClassName = `my-10 prose transition-smooth max-w-none ${
    computedTheme === 'dark' ? 'prose-invert' : ''
  }`;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <AnchorList anchors={anchors} />

      <div ref={ref} className={wrapperClassName}>
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        />
      </div>
    </>
  );
};
