// components/I18nMarkdownViewer.tsx
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import { useTranslation } from '../../context/i18n/I18nContext.tsx';

export const I18nMarkdownViewer = () => {
  const { language } = useTranslation();

  const [content, setContent] = useState<string>('');

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
    <div className="prose max-w-none">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
};
