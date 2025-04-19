import { createLocalStorageStore } from '../../store/localStorageStore.ts';
import { createUseStore } from '../../store/createUseStore.ts';

type FavouritesState = {
  favourites: string[];
  setFavourites: (favourites: string[]) => void;
};

const favouritesStore = createLocalStorageStore<FavouritesState>(
  'favourites-store',
  {
    favourites: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setFavourites: () => {},
  }
);

favouritesStore.setState({
  setFavourites: (favourites: string[]) =>
    favouritesStore.setState({ favourites }),
});

export const useFavouritesStore = createUseStore(favouritesStore);
