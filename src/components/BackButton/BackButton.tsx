import { useNavigateBack } from '../../hooks/useNavigateBack.ts';
import { useTranslation } from '../../context/i18n/I18nContext.tsx';
import { cn } from '../../utils/classnames.ts';

import BackButtonIcon from '../../assets/icons/back-button.svg?react';

type BackButtonProps = {
  className?: string;
};

export const BackButton = ({ className }: BackButtonProps) => {
  const { t } = useTranslation();
  const handleNavigateBack = useNavigateBack();

  return (
    <button
      onClick={handleNavigateBack}
      title={t('back')}
      type="button"
      aria-label={t('go_back')}
      className={cn(
        'group ring-bg-secondary sticky top-10 mb-4 -ml-2 block cursor-pointer rounded-full ring-4 2xl:-mb-12 2xl:-ml-16',
        className
      )}
    >
      <BackButtonIcon />
    </button>
  );
};
