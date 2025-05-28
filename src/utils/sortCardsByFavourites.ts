import type { SectionCard } from '../types/sectionCards.ts';
import type { Favourites } from '../types/favouritesTypes.ts';

export const sortCardsByFavourites = (
  cards: SectionCard[],
  favourites: Favourites
): SectionCard[] => {
  return [...cards].sort((a, b) => {
    const aIsFavourite = favourites?.[a.id] ?? false;
    const bIsFavourite = favourites?.[b.id] ?? false;

    if (aIsFavourite && !bIsFavourite) return -1;
    if (!aIsFavourite && bIsFavourite) return 1;

    return 0;
  });
};
