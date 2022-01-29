import { FC, memo } from 'react';

import { Icon } from '../Icon/Icon';

import { IconType } from '../../../utils/types/icon.types';

interface PopupButtonProps {
  isOpen: boolean,
  open: () => void,
  close: () => void,
  text?: string,
  icon?: IconType,
  iconPlacement?: 'left' | 'right',
  title?: string,
}

export const PopupButton: FC<PopupButtonProps> = memo(({
  isOpen,
  open,
  close,
  text,
  icon,
  iconPlacement = 'left',
  title,
}) => (
  <button
    type="button"
    className="flex items-center gap-2"
    onClick={isOpen ? close : open}
    title={title}
  >
    {icon && iconPlacement === 'left' && <Icon variant={icon} />}
    {text}
    {icon && iconPlacement === 'right' && <Icon variant={icon} />}
  </button>
));

PopupButton.displayName = 'PopupButton';
