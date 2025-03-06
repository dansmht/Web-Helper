import { useTranslation } from '../../context/i18n/I18nContext.tsx';
import { linkClassName, linkWrapperClassName } from './_constants.ts';

type SectionCardLinkSoonProps = {
  title: string;
};

export const SectionCardLinkSoon = ({ title }: SectionCardLinkSoonProps) => {
  const { t } = useTranslation();

  return (
    <li className={`${linkWrapperClassName} ring-text-secondary ring-2`}>
      <span className={`${linkClassName} cursor-default`}>
        {title} ({t('soon')})
      </span>
    </li>
  );
};
