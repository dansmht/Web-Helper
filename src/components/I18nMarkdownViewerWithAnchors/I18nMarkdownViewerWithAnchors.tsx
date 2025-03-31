import { useMemo, useRef } from 'react';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import { AnchorList } from '../AnchorList/AnchorList.tsx';
import { NavigationButtons } from '../NavigationButtons/NavigationButtons.tsx';
import { useI18nMarkdownLoader } from '../../hooks/markdown/useI18nMarkdownLoader.ts';
import { useMarkdownAnchors } from '../../hooks/markdown/useMarkdownAnchors.ts';
import { useTranslation } from '../../context/i18n/I18nContext.tsx';
import { useTheme } from '../../context/theme/ThemeContext.tsx';
import { useSystemTheme } from '../../hooks/theme/useSystemTheme.ts';
import { useScrollToHash } from '../../hooks/markdown/useScrollToHash.ts';
import { useEnhanceHeadingsAccessibility } from '../../hooks/markdown/useEnhanceHeadingsAccessibility.ts';
import { isEfficientTheme } from '../../utils/themeUtils.ts';
import { buildTopicNavigation } from '../../utils/navigationUtils.ts';
import { cn } from '../../utils/classnames.ts';

import type { Section } from '../../types/sharedTypes.ts';

export const I18nMarkdownViewerWithAnchors = () => {
  const { section = '' as Section, topic = '' } = useParams<{
    section: Section;
    topic: string;
  }>();
  const { language } = useTranslation();
  const { theme } = useTheme();
  const systemTheme = useSystemTheme();

  const markdownContainerRef = useRef<HTMLDivElement | null>(null);

  const { content, error, isLoading } = useI18nMarkdownLoader({
    section,
    fileName: topic,
    language,
  });

  const anchors = useMarkdownAnchors(content, markdownContainerRef);

  useEnhanceHeadingsAccessibility(markdownContainerRef);

  useScrollToHash(markdownContainerRef);

  const computedTheme = isEfficientTheme(theme) ? theme : systemTheme;
  const wrapperClassName = cn('my-12 prose transition-smooth max-w-none', {
    'prose-invert': computedTheme === 'dark',
  });

  const navigation = useMemo(
    () => buildTopicNavigation(section, topic),
    [section, topic]
  );

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {anchors && anchors.length > 0 && <AnchorList anchors={anchors} />}

      <div ref={markdownContainerRef} className={wrapperClassName}>
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        />
      </div>

      {navigation && <NavigationButtons {...navigation} />}
    </>
  );
};
