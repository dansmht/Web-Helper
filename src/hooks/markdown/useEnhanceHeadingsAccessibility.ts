import { useEffect } from 'react';

import type { RefObject } from 'react';

export const useEnhanceHeadingsAccessibility = (
  containerRef: RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    if (containerRef.current) {
      const headings = containerRef.current.querySelectorAll('h1, h2, h3');

      headings.forEach((heading) => {
        heading.setAttribute('tabIndex', '0');
        heading.setAttribute('class', 'inline-block');
      });
    }
  }, [containerRef.current]);
};
