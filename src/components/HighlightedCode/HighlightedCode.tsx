import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';

type HighlightedCodeProps = {
  code: string;
  language?: string;
};

export const HighlightedCode = ({ code }: HighlightedCodeProps) => {
  useEffect(() => {
    highlightCode();
  }, [code]);

  const highlightCode = () => {
    const nodes = document.querySelectorAll('pre code');

    nodes.forEach((node) => {
      delete (node as HTMLElement).dataset.highlighted;
      hljs.highlightElement(node as HTMLElement);
    });
  };

  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
};
