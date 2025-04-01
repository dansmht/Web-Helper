import { createContext, useContext, useState } from 'react';

import { getSavedFavourites } from '../../utils/favouritesUtils.ts';
import { LocalStorageKeys } from '../../constants/localStorageKeys.ts';

import type {
  Favourites,
  FavouritesContextProps,
} from '../../types/favouritesTypes.ts';
import type { PropsWithChildren } from 'react';

const FavouritesContext = createContext<FavouritesContextProps | undefined>(
  undefined
);

export const FavouritesProvider = ({ children }: PropsWithChildren) => {
  const [favourites, setFavourites] = useState<Favourites>(getSavedFavourites);

  const toggleFavourite = (id: string) => {
    setFavourites((prev) => {
      const newFavourites = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id];

      localStorage.setItem(
        LocalStorageKeys.FAVOURITES,
        JSON.stringify(newFavourites)
      );
      return newFavourites;
    });
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};
