import { useCallback, useEffect } from 'react';

import { useDropdown } from '../../hooks/dropdown/useDropdown.tsx';
import { useKeyboardNavigation } from '../../hooks/dropdown/useKeyboardNavigation.tsx';

import type { ReactNode } from 'react';

type DropdownOption<T extends string = string> = {
  value: T;
  element: ReactNode;
};

type DropdownProps<T extends string = string> = {
  options: DropdownOption<T>[];
  onSelect: (value: T) => void;
  buttonContent?: ReactNode;
};

export const Dropdown = <T extends string = string>({
  options,
  onSelect,
  buttonContent = 'Select an option',
}: DropdownProps<T>) => {
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
    (option: DropdownOption<T>) => {
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
        className="border-ring cursor-pointer rounded-md px-4 py-2"
      >
        {buttonContent}
      </button>

      {isOpen && (
        <div
          className="bg-bg-primary border-ring absolute top-full right-0 z-20 mt-4 rounded-md"
          role="menu"
          aria-orientation="vertical"
        >
          <ul
            className="overflow-hidden text-base font-semibold"
            role="listbox"
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                onKeyDown={(e) => handleOptionKeyDown(e, index)}
                role="option"
                tabIndex={0}
                className={`hover:bg-bg-hover cursor-pointer select-none first:rounded-t-sm last:rounded-b-sm ${selected === option.value ? 'group active text-accent' : 'text-text-secondary'}`}
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
