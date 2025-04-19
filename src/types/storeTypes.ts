export type Store<T> = {
  getState: () => T;
  setState: (newState: Partial<T>) => void;
  subscribe: (listener: () => void) => () => void;
  initState?: (initialState: T) => void;
};
