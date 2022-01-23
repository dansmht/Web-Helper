import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';

import { wrapperCodeClass } from '../utils/constants/highlight.constants';

export const useCodeHighlight = () => {
  useEffect(() => {
    document.querySelectorAll(`.${wrapperCodeClass} pre code`)
      .forEach((element) => {
        hljs.highlightElement(element as HTMLElement);
      });
  }, []);
};
