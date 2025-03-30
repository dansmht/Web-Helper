import { render, screen } from '../../test/testUtils.tsx';
import { LanguageDropdownButtonContent } from './LanguageDropdownButtonContent';
import { useTranslation } from '../../context/i18n/I18nContext';

jest.mock('../../context/i18n/I18nContext', () => ({
  ...(jest.requireActual(
    '../../context/i18n/I18nContext.tsx'
  ) as unknown as object),
  useTranslation: jest.fn(),
}));

describe('LanguageDropdownButtonContent', () => {
  const mockUseTranslation = useTranslation as jest.Mock;

  it('renders the English flag icon when language is "en"', () => {
    mockUseTranslation.mockReturnValue({ language: 'en' });

    render(<LanguageDropdownButtonContent />);

    const svgEnFlagIcon = screen.getByText('SVG');
    expect(svgEnFlagIcon).toBeInTheDocument();
  });

  it('renders the Russian flag icon when language is not "en"', () => {
    mockUseTranslation.mockReturnValue({ language: 'ru' });

    render(<LanguageDropdownButtonContent />);

    const svgRuFlagIcon = screen.getByText('SVG');
    expect(svgRuFlagIcon).toBeInTheDocument();
  });

  it('renders the English flag icon when language is not in the list', () => {
    mockUseTranslation.mockReturnValue({ language: 'test' });

    render(<LanguageDropdownButtonContent />);

    const svgEnFlagIcon = screen.getByText('SVG');
    expect(svgEnFlagIcon).toBeInTheDocument();
  });
});
