import { useLayoutEffect, useState } from 'react';

import type { RefObject } from 'react';
import type { AnchorLink } from '../../types/sharedTypes.ts';

export const useMarkdownAnchors = (
  content: string | null,
  containerRef: RefObject<HTMLDivElement | null>
) => {
  const [anchors, setAnchors] = useState<AnchorLink[] | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const tempAnchors: AnchorLink[] = [];
      const headings = containerRef.current.querySelectorAll('h1, h2, h3');

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
  }, [content, containerRef.current]);

  return anchors;
};
