import { render, screen } from '../../test/testUtils.tsx';
import { ThemeDropdownButtonContent } from './ThemeDropdownButtonContent';
import { useTheme } from '../../context/theme/ThemeContext.tsx';
import { useSystemTheme } from '../../hooks/theme/useSystemTheme.ts';

jest.mock('../../context/theme/ThemeContext.tsx', () => ({
  ...(jest.requireActual(
    '../../context/theme/ThemeContext'
  ) as unknown as object),
  useTheme: jest.fn(),
}));

describe('ThemeDropdownButtonContent', () => {
  const mockUseTheme = useTheme as jest.Mock;
  const mockUseSystemTheme = useSystemTheme as jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders the light theme icon when the theme is "light"', () => {
    mockUseTheme.mockReturnValue({ theme: 'light' });
    render(<ThemeDropdownButtonContent />);

    const svgLightIcon = screen.getByText('SVG');
    expect(svgLightIcon).toBeInTheDocument();
    expect(svgLightIcon).toHaveClass('group active');
  });

  it('renders the dark theme icon when the theme is "dark"', () => {
    mockUseTheme.mockReturnValue({ theme: 'dark' });
    render(<ThemeDropdownButtonContent />);

    const svgDarkIcon = screen.getByText('SVG');
    expect(svgDarkIcon).toBeInTheDocument();
    expect(svgDarkIcon).toHaveClass('group active');
  });

  it('renders the system theme icon when the theme is "system" and system theme is "light"', () => {
    mockUseTheme.mockReturnValue({ theme: 'system' });
    mockUseSystemTheme.mockReturnValue('light');

    render(<ThemeDropdownButtonContent />);

    const svgLightIcon = screen.getByText('SVG');
    expect(svgLightIcon).toBeInTheDocument();
    expect(svgLightIcon).not.toHaveClass('group active');
  });

  it('renders the system theme icon when the theme is "system" and system theme is "dark"', () => {
    mockUseTheme.mockReturnValue({ theme: 'system' });
    mockUseSystemTheme.mockReturnValue('dark');

    render(<ThemeDropdownButtonContent />);

    const svgDarkIcon = screen.getByText('SVG');
    expect(svgDarkIcon).toBeInTheDocument();
    expect(svgDarkIcon).not.toHaveClass('group active');
  });

  it('renders the custom theme icon when the theme is "custom"', () => {
    mockUseTheme.mockReturnValue({ theme: 'custom' });
    render(<ThemeDropdownButtonContent />);

    const svgCustomIcon = screen.getByText('SVG');
    expect(svgCustomIcon).toBeInTheDocument();
    expect(svgCustomIcon).toHaveClass('group active');
  });
});
