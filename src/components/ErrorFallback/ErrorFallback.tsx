import { useTranslation } from '../../context/i18n/I18nContext.tsx';

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <div role="alert">
      <p>{t('error.something_went_wrong')}:</p>
      <pre className="font-bold">{error.message}</pre>
      <button onClick={resetErrorBoundary}>{t('try_again')}</button>
    </div>
  );
};
