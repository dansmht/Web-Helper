import { DropdownOption } from '../components/Dropdown/DropdownOption.tsx';

import type { DropdownOptionType } from '../types/dropdownTypes.ts';

export const computeDropdownOptions = <T extends string = string>(
  options: DropdownOptionType<T>[]
) => {
  return options.map(({ value, ...rest }) => ({
    value,
    element: <DropdownOption {...rest} />,
  }));
};
