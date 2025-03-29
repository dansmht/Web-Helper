import { useCallback, useEffect } from 'react';

import type { KeyboardEvent as ReactKeyboardEvent, RefObject } from 'react';

type UseKeyboardNavigationProps = {
  isOpen: boolean;
  dropdownRef: RefObject<HTMLDivElement | null>;
  closeDropdown: () => void;
  handleOptionSelect: (selectedIndex: number) => void;
};

export const useKeyboardNavigation = ({
  isOpen,
  dropdownRef,
  closeDropdown,
  handleOptionSelect,
}: UseKeyboardNavigationProps) => {
  const handleOptionKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLLIElement>, optionIndex: number) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handleOptionSelect(optionIndex);
      }
    },
    [handleOptionSelect]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      } else if (isOpen && dropdownRef.current && event.key === 'Tab') {
        const focusableElements = dropdownRef.current.querySelectorAll(
          '[role="listbox"] > [role="option"]'
        );

        const firstElement = focusableElements[0] as HTMLElement | undefined;
        const lastElement = focusableElements[focusableElements.length - 1] as
          | HTMLElement
          | undefined;

        if (firstElement && lastElement) {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, dropdownRef, closeDropdown]);

  return handleOptionKeyDown;
};
