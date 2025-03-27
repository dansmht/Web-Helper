import { useEffect, useState } from 'react';

import type { RefObject } from 'react';

export const useScrollToHash = (
  containerRef: RefObject<HTMLElement | null>
) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setIsRendered(true);
    }
  }, [containerRef?.current]);

  useEffect(() => {
    if (isRendered) {
      const { hash } = window.location;
      if (hash) {
        const anchorId = decodeURI(hash.replace('#', ''));
        const targetElement = containerRef.current?.querySelector(
          `#${CSS.escape(anchorId)}`
        );

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, [isRendered, containerRef]);
};
