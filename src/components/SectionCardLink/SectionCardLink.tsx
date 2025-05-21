import { Link } from 'react-router';

import { useFavouritesStore } from '../../hooks/store/useFavouritesStore.ts';
import { cn } from '../../utils/classnames.ts';
import { linkClassName, linkWrapperClassName } from './_constants.ts';

import type { LinkProps } from 'react-router';

type SectionCardLinkProps = Omit<LinkProps, 'children'> & {
  title: string;
  sectionKey: string;
  id: string;
};

export const SectionCardLink = ({ id, title, sectionKey, ...rest }: SectionCardLinkProps) => {
  const toggleFavourite = useFavouritesStore((state) => state.toggleFavourite);

  return (
    <li className={linkWrapperClassName}>
      <Link
        className={cn('border-ring hover:text-accent', linkClassName)}
        {...rest}
      >
        {title}
      </Link>
      <div onClick={() => toggleFavourite(sectionKey, id)}>
        FAV
      </div>
    </li>
  );
};
