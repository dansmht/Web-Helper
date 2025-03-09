import { useTranslation } from '../../context/i18n/I18nContext.tsx';

import EnFlagIcon from '../../assets/icons/language/great-britain-flag.svg?react';
import RuFlagIcon from '../../assets/icons/language/russia-flag.svg?react';

export const LanguageDropdownButtonContent = () => {
  const { language } = useTranslation();

  return <div>{language === 'en' ? <EnFlagIcon /> : <RuFlagIcon />}</div>;
};
