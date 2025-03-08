import { useTranslation } from '../../context/i18n/I18nContext.tsx';

import EnIcon from '../../assets/icons/language/en.svg?react';
import RuIcon from '../../assets/icons/language/ru.svg?react';

export const LanguageDropdownButtonContent = () => {
  const { language } = useTranslation();

  return <div>{language === 'en' ? <EnIcon /> : <RuIcon />}</div>;
};
