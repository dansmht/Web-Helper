import { FC } from 'react';
import cn from 'classnames';

import { Icon } from '../Icon/Icon';

import { IconType } from '../../../utils/types/icon.types';

interface PopupItemProps {
  onClick?: () => void,
  close?: () => void,
  className?: string,
  icon?: IconType,
}

export const PopupItem: FC<PopupItemProps> = ({
  children,
  close,
  onClick,
  className,
  icon,
}) => {

  const buttonClasses = cn('flex items-center gap-2 py-2 px-3.5 w-full hover:bg-primary focus:bg-primary focus:outline-1 rounded-md', className);

  const handleClick = () => {
    if (close) {
      close();
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <li>
      <button
        type="button"
        className={buttonClasses}
        onClick={handleClick}
      >
        {icon && <Icon variant={icon} />}
        {children}
      </button>
    </li>
  );
};
