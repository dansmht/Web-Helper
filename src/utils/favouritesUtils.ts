import { LocalStorageKeys } from '../constants/localStorageKeys.ts';

import type { Favourites } from '../types/favouritesTypes.ts';

export const getSavedFavourites = (): Favourites => {
  const storedFavourites = localStorage.getItem(LocalStorageKeys.FAVOURITES);
  return storedFavourites ? (JSON.parse(storedFavourites) as Favourites) : [];
};
