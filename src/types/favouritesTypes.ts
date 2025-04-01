import type { PropsWithChildren } from 'react';

export type Favourites = string[];

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
