import type { PropsWithChildren } from 'react';

export type Favourites = Record<string, Record<string, boolean>>;

export type FavouritesStorage = {
  getFavourites: () => Favourites;
  saveFavourites: (favourites: Favourites) => void;
};

export type FavouritesProviderProps = PropsWithChildren & {
  storage: FavouritesStorage;
};

export type FavouritesContextProps = {
  favourites: Favourites;
  toggleFavourite: (id: string) => void;
};
