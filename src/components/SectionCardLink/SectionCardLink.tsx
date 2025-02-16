import { Link } from 'react-router';

import { linkClassName, linkWrapperClassName } from './_constants.ts';

import type { LinkProps } from 'react-router';

type SectionCardLinkProps = Omit<LinkProps, 'children'> & {
  title: string;
};

export const SectionCardLink = ({ title, ...rest }: SectionCardLinkProps) => {
  return (
    <li className={`${linkWrapperClassName} border-ring hover:text-accent`}>
      <Link className={linkClassName} {...rest}>
        {title}
      </Link>
    </li>
  );
};
