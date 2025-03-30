import { render, screen, fireEvent } from '../../test/testUtils.tsx';
import { LanguageDropdown } from './LanguageDropdown';
import { useTranslation } from '../../context/i18n/I18nContext';

import type { DropdownProps } from '../../types/dropdownTypes.ts';

jest.mock('../../context/i18n/I18nContext', () => ({
  ...(jest.requireActual(
    '../../context/i18n/I18nContext'
  ) as unknown as object),
  useTranslation: jest.fn(),
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

jest.mock('./LanguageDropdownButtonContent.tsx', () => ({
  LanguageDropdownButtonContent: () => <span>Language</span>,
}));

describe('LanguageDropdown', () => {
  const mockUseTranslation = useTranslation as jest.Mock;

  const mockChangeLanguage = jest.fn();
  const mockTranslation = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    mockUseTranslation.mockReturnValue({
      t: mockTranslation,
      changeLanguage: mockChangeLanguage,
    });
  });

  it('renders button content', () => {
    render(<LanguageDropdown />);

    expect(screen.getByText('Language')).toBeInTheDocument();
  });

  it('renders dropdown options', () => {
    render(<LanguageDropdown />);

    const options = screen.getAllByRole('button', { name: /svg/i });
    expect(options.length).toBe(2);

    expect(screen.getByTestId('option-ru')).toBeInTheDocument();
    expect(screen.getByTestId('option-en')).toBeInTheDocument();
  });

  it('calls changeLanguage when an option is selected', () => {
    render(<LanguageDropdown />);

    fireEvent.click(screen.getByTestId('option-ru'));

    expect(mockChangeLanguage).toHaveBeenCalledWith('ru');
  });
});
