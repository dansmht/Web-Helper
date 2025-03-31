import { useTranslation } from '../../context/i18n/I18nContext.tsx';
import { cn } from '../../utils/classnames.ts';
import { linkClassName, linkWrapperClassName } from './_constants.ts';

type SectionCardLinkSoonProps = {
  title: string;
};

export const SectionCardLinkSoon = ({ title }: SectionCardLinkSoonProps) => {
  const { t } = useTranslation();

  return (
    <li className={linkWrapperClassName}>
      <span
        tabIndex={0}
        className={cn(
          'ring-text-secondary focus-within:ring-accent cursor-default border-none ring-2 outline-none',
          linkClassName
        )}
      >
        {title} ({t('soon')})
      </span>
    </li>
  );
};
