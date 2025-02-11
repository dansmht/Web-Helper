import { Link } from 'react-router';

import type { LinkProps } from 'react-router';

type SectionCardLinkProps = Omit<LinkProps, 'children'> & {
  title: string;
};

export const SectionCardLink = ({ title, ...rest }: SectionCardLinkProps) => {
  return (
    <div className="flex h-36 w-52 items-center justify-center bg-orange-400 text-2xl">
      <Link className="h-full w-full" {...rest}>
        {title}
      </Link>
    </div>
  );
};
