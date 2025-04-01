export type Favourites = string[];

export type FavouritesContextProps = {
  favourites: string[];
  toggleFavourite: (id: string) => void;
};
