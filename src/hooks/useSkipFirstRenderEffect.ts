import { useEffect, useRef } from 'react';

import type { DependencyList, EffectCallback } from 'react';

export const useSkipFirstRenderEffect = (
  effect: EffectCallback,
  deps: DependencyList = []
) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
