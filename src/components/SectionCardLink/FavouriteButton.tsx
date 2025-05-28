import {
  selectIsFavourite,
  selectToggleFavourite,
  useFavouritesStore,
} from '../../store/favouritesStore.ts';
import { cn } from '../../utils/classnames.ts';

import FavouritesIcon from '../../assets/icons/favourites/star.svg?react';

type FavouriteButtonProps = {
  id: string;
};

export const FavouriteButton = ({ id }: FavouriteButtonProps) => {
  const isFavourite = useFavouritesStore(selectIsFavourite(id));
  const toggleFavourite = useFavouritesStore(selectToggleFavourite);

  return (
    <button
      onClick={() => toggleFavourite(id)}
      className={cn('group absolute right-2 bottom-2', {
        active: isFavourite,
      })}
    >
      <FavouritesIcon />
    </button>
  );
};
