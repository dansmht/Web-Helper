import { Link } from 'react-router';

import { useFavouritesStore } from '../../store/favouritesStore.ts';
import { cn } from '../../utils/classnames.ts';
import { linkClassName, linkWrapperClassName } from './_constants.ts';

import FavouritesIcon from '../../assets/icons/favourites/star.svg?react';

import type { LinkProps } from 'react-router';

type SectionCardLinkProps = Omit<LinkProps, 'children'> & {
  title: string;
  sectionKey: string;
  id: string;
};

export const SectionCardLink = ({
  id,
  title,
  sectionKey,
  ...rest
}: SectionCardLinkProps) => {
  const { favourites, toggleFavourite } = useFavouritesStore();

  return (
    <li className={linkWrapperClassName}>
      <Link
        className={cn('border-ring hover:text-accent', linkClassName)}
        {...rest}
      >
        {title}
      </Link>

      <button
        onClick={() => toggleFavourite(sectionKey, id)}
        className={cn('group absolute right-2 bottom-2', {
          active: favourites?.[sectionKey]?.[id],
        })}
      >
        <FavouritesIcon />
      </button>
    </li>
  );
};
