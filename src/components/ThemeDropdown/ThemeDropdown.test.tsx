import { render, screen, fireEvent } from '../../test/testUtils.tsx';
import { ThemeDropdown } from './ThemeDropdown';
import { useTheme } from '../../context/theme/ThemeContext';

import type { DropdownProps } from '../../types/dropdownTypes.ts';

jest.mock('../../context/theme/ThemeContext.tsx', () => ({
  ...(jest.requireActual(
    '../../context/theme/ThemeContext'
  ) as unknown as object),
  useTheme: jest.fn(),
}));

jest.mock('../Dropdown/Dropdown.tsx', () => ({
  Dropdown: ({ options, onSelect, buttonContent }: DropdownProps) => (
    <div>
      <button data-testid="dropdown-button">{buttonContent}</button>
      <ul>
        {options.map((option) => (
          <li key={option.value}>
            <button
              data-testid={`option-${option.value}`}
              onClick={() => onSelect(option.value)}
            >
              {option.element}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ),
}));

jest.mock('./ThemeDropdownButtonContent.tsx', () => ({
  ThemeDropdownButtonContent: () => <span>Theme</span>,
}));

describe('ThemeDropdown', () => {
  const mockUseTheme = useTheme as jest.Mock;

  const mockUpdateTheme = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    mockUseTheme.mockReturnValue({ updateTheme: mockUpdateTheme });
  });

  it('renders button content', () => {
    render(<ThemeDropdown />);

    expect(screen.getByText('Theme')).toBeInTheDocument();
  });

  it('renders dropdown options', () => {
    render(<ThemeDropdown />);

    const options = screen.getAllByRole('button', { name: /svg/i });
    expect(options.length).toBe(4);

    expect(screen.getByTestId('option-system')).toBeInTheDocument();
    expect(screen.getByTestId('option-light')).toBeInTheDocument();
    expect(screen.getByTestId('option-dark')).toBeInTheDocument();
    expect(screen.getByTestId('option-custom')).toBeInTheDocument();
  });

  it('calls updateTheme with the correct theme when a valid theme is selected', () => {
    render(<ThemeDropdown />);

    fireEvent.click(screen.getByTestId('option-light'));
    expect(mockUpdateTheme).toHaveBeenCalledWith('light');

    fireEvent.click(screen.getByTestId('option-dark'));
    expect(mockUpdateTheme).toHaveBeenCalledWith('dark');

    fireEvent.click(screen.getByTestId('option-system'));
    expect(mockUpdateTheme).toHaveBeenCalledWith('system');

    expect(mockUpdateTheme).toHaveBeenCalledTimes(3);
  });

  it('should not call updateTheme when the selected theme is "custom"', () => {
    render(<ThemeDropdown />);

    fireEvent.click(screen.getByTestId('option-custom'));
    expect(mockUpdateTheme).not.toHaveBeenCalled();
  });
});
