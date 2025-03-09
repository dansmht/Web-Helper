import { useEffect, useRef, useState } from 'react';

import type { AnchorLink } from '../../types/sharedTypes.ts';

export const useMarkdownAnchors = (content: string | null) => {
  const markdownContainerRef = useRef<HTMLDivElement | null>(null);

  const [anchors, setAnchors] = useState<AnchorLink[]>([]);

  useEffect(() => {
    if (markdownContainerRef.current) {
      const tempAnchors: AnchorLink[] = [];
      const headings =
        markdownContainerRef.current.querySelectorAll('h1, h2, h3');

      headings.forEach((heading) => {
        const text = heading.textContent ?? '';
        const id = text.replace(/\s+/g, '-').toLowerCase();
        heading.setAttribute('id', id);
        tempAnchors.push({
          id,
          text,
          spacing: heading.tagName === 'H3',
        });
      });

      setAnchors(tempAnchors);
    }
  }, [content]);

  return { anchors, ref: markdownContainerRef };
};
