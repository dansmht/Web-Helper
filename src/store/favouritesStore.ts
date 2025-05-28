import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { StateCreator } from 'zustand';
import type { Favourites } from '../types/favouritesTypes.ts';

type FavouritesStore = {
  favourites: Favourites;
  toggleFavourite: (topicId: string) => void;
};

const favouritesStoreMiddlewares = (
  f: StateCreator<
    FavouritesStore,
    [
      ['zustand/devtools', never],
      ['zustand/immer', never],
      ['zustand/persist', unknown],
    ]
  >
) =>
  devtools(immer(persist(f, { name: 'Favourites', version: 1 })), {
    name: 'Favourites',
  });

export const useFavouritesStore = create<FavouritesStore>()(
  favouritesStoreMiddlewares((set) => ({
    favourites: {},

    toggleFavourite: (topicId) =>
      set(
        (state) => {
          if (state.favourites[topicId]) {
            delete state.favourites[topicId];
          } else {
            state.favourites[topicId] = true;
          }
        },
        false,
        'toggleFavourite'
      ),
  }))
);

export const selectFavourites = (state: FavouritesStore) => state.favourites;

export const selectIsFavourite =
  (topicId: string) => (state: FavouritesStore) =>
    state.favourites[topicId] ?? false;

export const selectToggleFavourite = (state: FavouritesStore) =>
  state.toggleFavourite;
