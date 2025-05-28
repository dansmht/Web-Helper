import { Link } from 'react-router';

import { FavouriteButton } from './FavouriteButton.tsx';

import { cn } from '../../utils/classnames.ts';
import { linkClassName, linkWrapperClassName } from './_constants.ts';

import type { LinkProps } from 'react-router';

type SectionCardLinkProps = Omit<LinkProps, 'children'> & {
  title: string;
  id: string;
};

export const SectionCardLink = ({
  id,
  title,
  ...rest
}: SectionCardLinkProps) => (
  <li className={linkWrapperClassName}>
    <Link
      className={cn('border-ring hover:text-accent', linkClassName)}
      {...rest}
    >
      {title}
    </Link>

    <FavouriteButton id={id} />
  </li>
);
