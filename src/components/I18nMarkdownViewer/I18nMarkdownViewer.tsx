import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import { useI18nMarkdownLoader } from '../../hooks/markdown/useI18nMarkdownLoader.ts';
import { useTranslation } from '../../context/i18n/I18nContext.tsx';
import { useTheme } from '../../context/theme/ThemeContext.tsx';
import { useSystemTheme } from '../../hooks/theme/useSystemTheme.ts';
import { isEfficientTheme } from '../../utils/themeUtils.ts';

export const I18nMarkdownViewer = () => {
  const { topic } = useParams<{ topic: string }>();
  const { language } = useTranslation();
  const { theme } = useTheme();
  const systemTheme = useSystemTheme();

  const { content, error, isLoading } = useI18nMarkdownLoader({
    fileName: topic ?? '',
    language,
  });

  const computedTheme = isEfficientTheme(theme) ? theme : systemTheme;
  const wrapperClassName = `prose transition-smooth max-w-none ${
    computedTheme === 'dark' ? 'prose-invert' : ''
  }`;

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
      <ReactMarkdown
        children={content ?? ''}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    );
  };

  return <div className={wrapperClassName}>{renderContent()}</div>;
};
