import { Dropdown } from '../Dropdown/Dropdown.tsx';
import { LanguageDropdownButtonContent } from './LanguageDropdownButtonContent.tsx';
import { useTranslation } from '../../context/i18n/I18nContext.tsx';

import { languageDropdownOptions } from '../../constants/language/languageDropdownOptions.tsx';

export const LanguageDropdown = () => {
  const { changeLanguage } = useTranslation();

  return (
    <Dropdown
      options={languageDropdownOptions}
      onSelect={changeLanguage}
      buttonContent={<LanguageDropdownButtonContent />}
    />
  );
};
