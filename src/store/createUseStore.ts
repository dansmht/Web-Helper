import { useState, useEffect } from 'react';

import type { Store } from '../types/storeTypes.ts';

export const createUseStore = <T>(store: Store<T>) => {
  return <S>(selector: (state: T) => S): S => {
    const [selectedState, setSelectedState] = useState(
      selector(store.getState())
    );

    useEffect(() => {
      const callback = () => {
        const nextState = selector(store.getState());
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
