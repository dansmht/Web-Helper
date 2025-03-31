import { Link } from 'react-router';

import { cn } from '../../utils/classnames.ts';

import type { ReactNode } from 'react';
import type { LinkProps } from 'react-router';

type IconPosition = 'left' | 'right';

type NavigationButtonProps = LinkProps & {
  icon?: ReactNode;
  iconPosition?: IconPosition;
};

export const NavigationButton = ({
  children,
  className,
  icon,
  iconPosition = 'left',
  ...rest
}: NavigationButtonProps) => {
  const linkClassName = cn(
    'group bg-bg-primary text-text-secondary hover:text-accent transition-smooth min-w-32',
    'flex items-center justify-center gap-1 rounded-lg p-4 leading-[1.75] font-semibold select-none',
    className
  );

  return (
    <Link className={linkClassName} {...rest}>
      {icon && iconPosition === 'left' && icon}

      {children}

      {icon && iconPosition === 'right' && icon}
    </Link>
  );
};
