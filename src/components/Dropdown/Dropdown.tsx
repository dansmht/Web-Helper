import { useState, useEffect, useRef, useCallback } from 'react';

import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from 'react';

type DropdownOption = {
  value: string;
  element: ReactNode;
};

type DropdownProps = {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  defaultLabel?: string;
};

export const Dropdown = ({
  options,
  onSelect,
  defaultLabel = 'Select an option',
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOptionClick = useCallback(
    (option: DropdownOption) => {
      setSelected(option.value);
      closeDropdown();
      onSelect(option.value);
      buttonRef.current?.focus();
    },
    [onSelect, closeDropdown]
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    },
    [dropdownRef, buttonRef, closeDropdown]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
      if (event.key === 'Tab' && isOpen && dropdownRef.current) {
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
    [isOpen, closeDropdown]
  );

  const handleOptionKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLLIElement>, option: DropdownOption) => {
      if (event.key === ' ') {
        event.preventDefault(); // Prevent the page from scrolling when Space is pressed
        handleOptionClick(option);
      }
    },
    [handleOptionClick]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        ref={buttonRef}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50"
      >
        {options.find((option) => option.value === selected)?.element ??
          defaultLabel}
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 z-20 mt-2 w-30 rounded-md bg-white shadow-lg"
          role="menu"
          aria-orientation="vertical"
        >
          <ul className="overflow-hidden py-1" role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                onKeyDown={(e) => handleOptionKeyDown(e, option)}
                role="option"
                tabIndex={0}
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              >
                {option.element}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
