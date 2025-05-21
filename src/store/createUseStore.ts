import { useState, useEffect } from 'react';

import type { Store } from '../types/storeTypes.ts';

export const createUseStore = <T>(store: Store<T>) => {
  return <S = T>(selector?: (state: T) => S): S => {
    const [selectedState, setSelectedState] = useState(
      selector ? selector(store.getState()) : (store.getState() as unknown as S)
    );

    useEffect(() => {
      const callback = () => {
        const nextState = selector ? selector(store.getState()) : (store.getState() as unknown as S);

        setSelectedState((prevState) =>
          Object.is(prevState, nextState) ? prevState : nextState
        );
      };

      const unsubscribe = store.subscribe(callback);
      callback();
      return () => unsubscribe();
    }, [selector]);

    return selectedState;
  };
};
