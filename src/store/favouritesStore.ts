import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { StateCreator } from 'zustand';
import type { Favourites } from '../types/favouritesTypes.ts';

type FavouritesStore = {
  favourites: Favourites;
  toggleFavourite: (section: string, topic: string) => void;
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

    toggleFavourite: (section, topic) =>
      set(
        (state) => {
          if (!state.favourites[section]) {
            state.favourites[section] = {};
          }

          if (state.favourites[section][topic]) {
            delete state.favourites[section][topic];
          } else {
            state.favourites[section][topic] = true;
          }

          if (
            state.favourites[section] &&
            Object.keys(state.favourites[section]).length === 0
          ) {
            delete state.favourites[section];
          }
        },
        false,
        'toggleFavourite'
      ),
  }))
);
