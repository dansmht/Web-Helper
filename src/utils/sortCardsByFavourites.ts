import type { SectionCard } from '../types/sectionCards.ts';
import type { Favourites } from '../types/favouritesTypes.ts';

export const sortCardsByFavourites = (
  cards: SectionCard[],
  favourites: Favourites,
  sectionKey: string
): SectionCard[] => {
  return [...cards].sort((a, b) => {
    const aIsFavourite = favourites?.[sectionKey]?.[a.id] ?? false;
    const bIsFavourite = favourites?.[sectionKey]?.[b.id] ?? false;

    if (aIsFavourite && !bIsFavourite) return -1;
    if (!aIsFavourite && bIsFavourite) return 1;

    return 0;
  });
};
