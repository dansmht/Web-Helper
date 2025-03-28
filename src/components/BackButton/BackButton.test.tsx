import { render, screen, fireEvent } from '../../test/testUtils.tsx';
import { BackButton } from './BackButton.tsx';
import { useTranslation } from '../../context/i18n/I18nContext.tsx';
import { useNavigateBack } from '../../hooks/useNavigateBack.ts';

jest.mock('../../context/i18n/I18nContext', () => ({
  ...(jest.requireActual(
    '../../context/i18n/I18nContext.tsx'
  ) as unknown as object),
  useTranslation: jest.fn(),
}));
jest.mock('../../hooks/useNavigateBack', () => ({
  useNavigateBack: jest.fn(),
}));

describe('BackButton Component', () => {
  const mockUseTranslation = useTranslation as jest.Mock;
  const mockUseNavigateBack = useNavigateBack as jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();

    mockUseTranslation.mockReturnValue({
      t: (key: string) => key,
    });
    mockUseNavigateBack.mockReturnValue(jest.fn());
  });

  it('renders the button', () => {
    render(<BackButton />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('title', 'back');
    expect(button).toHaveAttribute('aria-label', 'go_back');
  });

  it('calls handleNavigateBack function on click', () => {
    const mockNavigateBack = mockUseNavigateBack() as jest.Mock;

    render(<BackButton />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockNavigateBack).toHaveBeenCalledTimes(1);
  });

  it('applies custom className when provided', () => {
    const customClass = 'my-custom-class';

    render(<BackButton className={customClass} />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass(customClass);
  });

  it('renders BackButtonIcon', () => {
    render(<BackButton />);

    const svgIcon = screen.getByText('SVG');

    expect(svgIcon).toBeInTheDocument();
  });
});
