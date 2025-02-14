import { useCallback } from 'react';

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
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
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
    },
    [isOpen, dropdownRef, closeDropdown]
  );

  const handleOptionKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLLIElement>, optionIndex: number) => {
      if (event.key === ' ') {
        event.preventDefault();
        handleOptionSelect(optionIndex);
      }
    },
    [handleOptionSelect]
  );

  return { handleKeyDown, handleOptionKeyDown };
};
