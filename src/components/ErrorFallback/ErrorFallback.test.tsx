import { render, screen, fireEvent } from '../../test/testUtils.tsx';
import { ErrorFallback } from './ErrorFallback';

jest.mock('../../context/i18n/I18nContext', () => ({
  ...(jest.requireActual(
    '../../context/i18n/I18nContext'
  ) as unknown as object),
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'error.something_went_wrong': 'Something went wrong',
        try_again: 'Try Again',
      };
      return translations[key] || key;
    },
  }),
}));

describe('ErrorFallback', () => {
  const error = new Error('Test error message');
  const mockResetErrorBoundary = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders the error message correctly', () => {
    render(
      <ErrorFallback
        error={error}
        resetErrorBoundary={mockResetErrorBoundary}
      />
    );

    expect(screen.getByText('Something went wrong:')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('renders the Try Again button with translation', () => {
    render(
      <ErrorFallback
        error={error}
        resetErrorBoundary={mockResetErrorBoundary}
      />
    );

    const button = screen.getByRole('button', { name: 'Try Again' });
    expect(button).toBeInTheDocument();
  });

  it('calls resetErrorBoundary when the button is clicked', () => {
    render(
      <ErrorFallback
        error={error}
        resetErrorBoundary={mockResetErrorBoundary}
      />
    );

    const button = screen.getByRole('button', { name: 'Try Again' });
    fireEvent.click(button);

    expect(mockResetErrorBoundary).toHaveBeenCalledTimes(1);
  });

  it('supports custom error messages', () => {
    const error = new Error('Custom error occurred');
    render(
      <ErrorFallback
        error={error}
        resetErrorBoundary={mockResetErrorBoundary}
      />
    );

    expect(screen.getByText('Custom error occurred')).toBeInTheDocument();
  });

  it('renders the alert role correctly', () => {
    render(
      <ErrorFallback
        error={error}
        resetErrorBoundary={mockResetErrorBoundary}
      />
    );

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
