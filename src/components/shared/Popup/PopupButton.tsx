import { FC, memo } from 'react';

import { Icon } from '../Icon/Icon';

import { IconType } from '../../../utils/types/icon.types';

interface PopupButtonProps {
  isOpen: boolean,
  open: () => void,
  close: () => void,
  title?: string,
  icon?: IconType,
  iconPlacement?: 'left' | 'right',
}

export const PopupButton: FC<PopupButtonProps> = memo(({
  isOpen,
  open,
  close,
  title,
  icon,
  iconPlacement = 'left',
}) => (
  <button
    type="button"
    className="flex items-center gap-2"
    onClick={isOpen ? close : open}
  >
    {icon && iconPlacement === 'left' && <Icon variant={icon} />}
    {title}
    {icon && iconPlacement === 'right' && <Icon variant={icon} />}
  </button>
));

PopupButton.displayName = 'PopupButton';
