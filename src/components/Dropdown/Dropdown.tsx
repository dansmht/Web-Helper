import { useCallback, useEffect } from 'react';

import { useDropdown } from '../../hooks/dropdown/useDropdown.tsx';
import { useKeyboardNavigation } from '../../hooks/dropdown/useKeyboardNavigation.tsx';

import type { ReactNode } from 'react';

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
  const {
    isOpen,
    selected,
    toggleDropdown,
    closeDropdown,
    setSelected,
    dropdownRef,
    buttonRef,
  } = useDropdown();

  const handleOptionSelect = useCallback(
    (option: DropdownOption) => {
      setSelected(option.value);
      closeDropdown();
      onSelect(option.value);
      buttonRef.current?.focus();
    },
    [closeDropdown, onSelect, setSelected, buttonRef]
  );

  const { handleKeyDown, handleOptionKeyDown } = useKeyboardNavigation({
    isOpen,
    dropdownRef,
    closeDropdown,
    handleOptionSelect: (index) => handleOptionSelect(options[index]),
  });

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

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
          className="absolute top-full right-0 z-20 mt-4 w-30 rounded-md bg-white shadow-lg"
          role="menu"
          aria-orientation="vertical"
        >
          <ul className="overflow-hidden py-1" role="listbox">
            {options.map((option, index) => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                onKeyDown={(e) => handleOptionKeyDown(e, index)}
                role="option"
                tabIndex={0}
                className="cursor-pointer px-4 py-2 text-sm text-gray-700 select-none hover:bg-gray-100"
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
