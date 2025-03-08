import { Link } from 'react-router';

import { useTranslation } from '../../context/i18n/I18nContext.tsx';

import type { ElementType } from 'react';
import type { DropdownOptionProps } from '../../types/dropdownTypes.ts';

export const DropdownOption = ({
  label,
  icon,
  linkTo,
}: DropdownOptionProps) => {
  const { t } = useTranslation();

  const Element: ElementType = linkTo ? Link : 'div';
  const elementProps = linkTo ? { to: linkTo } : {};

  return (
    <Element
      {...elementProps}
      className="flex items-center space-x-2 px-4 py-2"
    >
      {icon}
      <span>{t(label)}</span>
    </Element>
  );
};
