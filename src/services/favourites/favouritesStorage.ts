import { LocalStorageKeys } from '../../constants/localStorageKeys.ts';

import type {
  Favourites,
  FavouritesStorage,
} from '../../types/favouritesTypes.ts';

export const localStorageFavourites: FavouritesStorage = {
  getFavourites: (): Favourites => {
    const storedFavourites = localStorage.getItem(LocalStorageKeys.FAVOURITES);
    return storedFavourites ? (JSON.parse(storedFavourites) as Favourites) : [];
  },
  saveFavourites: (favourites: Favourites) => {
    localStorage.setItem(
      LocalStorageKeys.FAVOURITES,
      JSON.stringify(favourites)
    );
  },
};
