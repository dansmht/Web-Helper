export function createLocalStorageStore<T>(key: string, initialState: T) {
  let state: T;
  try {
    const storedData = localStorage.getItem(key);
    state = storedData ? JSON.parse(storedData) as T : initialState;
  } catch (error) {
    console.warn(`Error reading from localStorage for key "${key}":`, error);
    state = initialState;
  }

  const listeners: (() => void)[] = [];

  const getState = () => state;

  const setState = (newState: Partial<T>) => {
    state = { ...state, ...newState };
    localStorage.setItem(key, JSON.stringify(state));
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  };

  const initState = (initialState?: T) => {
    if (initialState) {
      state = initialState;
      localStorage.setItem(key, JSON.stringify(state));
    }
  };

  return { getState, setState, subscribe, initState };
}
