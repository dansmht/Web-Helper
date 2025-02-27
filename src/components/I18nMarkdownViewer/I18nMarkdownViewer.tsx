import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import { useTranslation } from '../../context/i18n/I18nContext.tsx';
import { useTheme } from '../../context/theme/ThemeContext.tsx';
import { useSystemTheme } from '../../hooks/theme/useSystemTheme.ts';
import { isEfficientTheme } from '../../utils/themeUtils.ts';

export const I18nMarkdownViewer = () => {
  const { language } = useTranslation();
  const { theme } = useTheme();
  const systemTheme = useSystemTheme();

  const [content, setContent] = useState<string>('');

  const efficientTheme = isEfficientTheme(theme) ? theme : systemTheme;
  const wrapperClassName = efficientTheme === 'dark' ? 'prose-invert' : '';

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/markdown/${language}.md`); // TODO
        const text = await response.text();
        setContent(text);
      } catch (error) {
        window.console.error('Error fetching Markdown content:', error);
        setContent('Content not found.');
      }
    };

    void fetchMarkdown();
  }, [language]);

  return (
    <div className={`prose transition-smooth max-w-none ${wrapperClassName}`}>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
};
