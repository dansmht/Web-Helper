import { useEffect, useRef } from 'react';

export const useTitle = (title: string, restoreOnUnmount = false) => {
  const originalTitleRef = useRef(document.title);

  if (document.title !== title) document.title = title;

  useEffect(() => {
    if (restoreOnUnmount) {
      return () => {
        document.title = originalTitleRef.current;
      };
    }
  }, [restoreOnUnmount]);
};
