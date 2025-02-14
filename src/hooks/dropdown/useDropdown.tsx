import { useState, useCallback, useEffect, useRef } from 'react';

import type { Dispatch, RefObject, SetStateAction } from 'react';

type UseDropdownReturn = {
  isOpen: boolean;
  selected: string | null;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  setSelected: Dispatch<SetStateAction<string | null>>;
  dropdownRef: RefObject<HTMLDivElement | null>;
  buttonRef: RefObject<HTMLButtonElement | null>;
  handleClickOutside: (event: MouseEvent) => void;
};

export const useDropdown = (): UseDropdownReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        !dropdownRef.current?.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    },
    [dropdownRef, buttonRef, closeDropdown]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return {
    isOpen,
    selected,
    toggleDropdown,
    closeDropdown,
    setSelected,
    dropdownRef,
    buttonRef,
    handleClickOutside,
  };
};
