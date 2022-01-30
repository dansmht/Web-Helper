import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';

import { PopupButton } from './PopupButton';

import { IconType } from '../../../utils/types/icon.types';
import { ESC_CODE } from '../../../utils/constants/event-key-codes.constants';

interface PopupProps {
  children: (({ close }: { close: () => void }) => ReactNode) | ReactNode,
  closableOnClickOutside?: boolean,
  icon?: IconType,
  buttonIconPlacement?: 'left' | 'right',
  size?: 'small' | 'medium' | 'large' | 'auto',
  buttonText?: string,
  title?: string,
}

export const Popup: FC<PopupProps> = ({
  children,
  closableOnClickOutside = true,
  icon = null,
  buttonIconPlacement,
  size = 'medium',
  buttonText,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  const popupDropdownClasses = useMemo(() => cn('absolute py-1 top-full mt-4 right-2 z-20 bg-secondary text-secondary rounded-lg ring-2 ring-color shadow-lg shadow-color', {
    'w-16': size === 'small',
    'w-36': size === 'medium',
    'w-48': size === 'large',
    'w-auto': size === 'auto',
  }), [size]);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    const path = event.composedPath();

    if (!path.includes(popupRef.current as HTMLDivElement)) {
      close();
    }
  }, [close]);

  const handleEscapePress = useCallback((event: KeyboardEvent) => {
    if (event.code === ESC_CODE) {
      close();
    }
  }, [close]);

  useEffect(() => () => {

    if (closableOnClickOutside) {
      document.removeEventListener('click', handleOutsideClick);
    }
    document.removeEventListener('keydown', handleEscapePress);

  }, [handleOutsideClick, handleEscapePress, closableOnClickOutside]);

  useEffect(() => {
    if (isOpen) {
      if (closableOnClickOutside) {
        document.addEventListener('click', handleOutsideClick);
      }
      document.addEventListener('keydown', handleEscapePress);
    } else {
      if (closableOnClickOutside) {
        document.removeEventListener('click', handleOutsideClick);
      }
      document.removeEventListener('keydown', handleEscapePress);
    }
  }, [isOpen, handleOutsideClick, handleEscapePress, closableOnClickOutside]);

  return (
    <div ref={popupRef} className="flex relative max-w-[10rem]">

      <PopupButton
        isOpen={isOpen}
        open={open}
        close={close}
        text={buttonText}
        icon={icon || undefined}
        iconPlacement={buttonIconPlacement}
        title={title}
      />

      {isOpen && (
        <ul className={popupDropdownClasses}>
          {
            typeof children === 'function'
              ? children({ close })
              : children
          }
        </ul>
      )}
    </div>
  );
};
