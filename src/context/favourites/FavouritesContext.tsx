import { createContext, useContext, useState } from 'react';

import type {
  Favourites,
  FavouritesContextProps,
  FavouritesProviderProps,
} from '../../types/favouritesTypes.ts';

const FavouritesContext = createContext<FavouritesContextProps | undefined>(
  undefined
);

export const FavouritesProvider = ({
  storage,
  children,
}: FavouritesProviderProps) => {
  const [favourites, setFavourites] = useState<Favourites>(
    storage.getFavourites
  );

  const toggleFavourite = (id: string) => {
    setFavourites((prev) => {
      const newFavourites = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id];

      storage.saveFavourites(newFavourites);
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
