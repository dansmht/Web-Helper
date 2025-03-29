import { render, screen } from '../../test/testUtils.tsx';
import { Header } from './Header';
import { LanguageDropdown } from '../LanguageDropdown/LanguageDropdown';
import { ThemeDropdown } from '../ThemeDropdown/ThemeDropdown';

jest.mock('../LanguageDropdown/LanguageDropdown', () => ({
  LanguageDropdown: jest.fn(() => (
    <div data-testid="language-dropdown">Language Dropdown</div>
  )),
}));
jest.mock('../ThemeDropdown/ThemeDropdown', () => ({
  ThemeDropdown: jest.fn(() => (
    <div data-testid="theme-dropdown">Theme Dropdown</div>
  )),
}));

describe('Header', () => {
  it('renders the header with logo and dropdowns', () => {
    render(<Header />);

    const logo = screen.getByRole('heading', { name: /web helper/i });
    expect(logo).toBeInTheDocument();

    const logoLink = screen.getByRole('link', { name: /web helper/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');

    const languageDropdown = screen.getByTestId('language-dropdown');
    expect(languageDropdown).toBeInTheDocument();

    const themeDropdown = screen.getByTestId('theme-dropdown');
    expect(themeDropdown).toBeInTheDocument();
  });

  it('renders the logo with a correct heading level and text', () => {
    render(<Header />);

    const logoHeading = screen.getByRole('heading', { level: 1 });
    expect(logoHeading).toHaveTextContent('Web Helper');
  });

  it('renders LanguageDropdown component', () => {
    render(<Header />);

    expect(LanguageDropdown).toHaveBeenCalled();
    expect(screen.getByTestId('language-dropdown')).toBeInTheDocument();
  });

  it('renders ThemeDropdown component', () => {
    render(<Header />);

    expect(ThemeDropdown).toHaveBeenCalled();
    expect(screen.getByTestId('theme-dropdown')).toBeInTheDocument();
  });

  it('navigates to the home page when the logo is clicked', () => {
    render(<Header />);

    const logoLink = screen.getByRole('link', { name: /web helper/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
