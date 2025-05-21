import { createLocalStorageStore } from '../../store/localStorageStore.ts';
import { createUseStore } from '../../store/createUseStore.ts';

import type { Favourites } from '../../types/favouritesTypes.ts';

type FavouritesState = {
  favourites: Favourites;
  setFavourites: (favourites: Favourites) => void;
  toggleFavourite: (sectionKey: string, key: string) => void;
};

/* eslint-disable @typescript-eslint/no-empty-function */
const favouritesStore = createLocalStorageStore<FavouritesState>(
  'favourites-store',
  {
    favourites: {},
    setFavourites: () => {},
    toggleFavourite: () => {},
  }
);

favouritesStore.setState({
  setFavourites: (favourites: Favourites) =>
    favouritesStore.setState({ favourites }),
  toggleFavourite: (sectionKey: string, key: string) => {
    const currentState = favouritesStore.getState();
    const currentSectionFavourites = currentState.favourites[sectionKey] || {};

    const isCurrentlyFavourite = currentSectionFavourites[key];

    if (isCurrentlyFavourite) {
      const restSectionFavourites = { ...currentSectionFavourites };
      delete restSectionFavourites[key];

      if (Object.keys(restSectionFavourites).length === 0) {
        const restFavourites = { ...currentState.favourites };
        delete restFavourites[sectionKey];

        favouritesStore.setState({
          favourites: restFavourites
        });
      } else {
        favouritesStore.setState({
          favourites: {
            ...currentState.favourites,
            [sectionKey]: restSectionFavourites
          }
        });
      }
    } else {
      favouritesStore.setState({
        favourites: {
          ...currentState.favourites,
          [sectionKey]: {
            ...currentSectionFavourites,
            [key]: true
          }
        }
      });
    }
  },
});

export const useFavouritesStore = createUseStore(favouritesStore);
