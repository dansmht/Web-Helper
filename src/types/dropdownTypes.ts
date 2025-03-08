import type { ReactNode } from 'react';

export type DropdownOption<T extends string = string> = {
  value: T;
  element: ReactNode;
};

export type DropdownProps<T extends string = string> = {
  options: DropdownOption<T>[];
  onSelect: (value: T) => void;
  buttonContent?: ReactNode;
};

export type DropdownOptionProps = {
  label: string;
  icon: ReactNode;
  linkTo?: string;
};

export type DropdownOptionType<T extends string = string> =
  DropdownOptionProps & {
    value: T;
  };
