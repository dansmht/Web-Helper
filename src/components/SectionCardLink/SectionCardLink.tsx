import { Link } from 'react-router';

import { cn } from '../../utils/classnames.ts';
import { linkClassName, linkWrapperClassName } from './_constants.ts';

import type { LinkProps } from 'react-router';

type SectionCardLinkProps = Omit<LinkProps, 'children'> & {
  title: string;
};

export const SectionCardLink = ({ title, ...rest }: SectionCardLinkProps) => {
  return (
    <li className={linkWrapperClassName}>
      <Link
        className={cn('border-ring hover:text-accent', linkClassName)}
        {...rest}
      >
        {title}
      </Link>
    </li>
  );
};
