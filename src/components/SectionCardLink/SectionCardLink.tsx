import { Link } from 'react-router';

import { linkClassName, linkWrapperClassName } from './_constants.ts';

import type { LinkProps } from 'react-router';

type SectionCardLinkProps = Omit<LinkProps, 'children'> & {
  title: string;
};

export const SectionCardLink = ({ title, ...rest }: SectionCardLinkProps) => {
  return (
    <li
      className={`${linkWrapperClassName} hover:border-accent transition-colors duration-300`}
    >
      <Link className={linkClassName} {...rest}>
        {title}
      </Link>
    </li>
  );
};
