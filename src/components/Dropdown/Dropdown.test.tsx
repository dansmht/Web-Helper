import { render, screen, fireEvent } from '../../test/testUtils.tsx';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const options = [
    { value: 'option1', element: 'Option 1' },
    { value: 'option2', element: 'Option 2' },
    {
      value: 'option3',
      element: <span style={{ color: 'red' }}>Custom Option 3</span>,
    },
  ];

  const onSelect = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders dropdown with default button content', () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders custom button content', () => {
    render(
      <Dropdown
        options={options}
        onSelect={onSelect}
        buttonContent="Custom Button"
      />
    );
    expect(screen.getByText('Custom Button')).toBeInTheDocument();
  });

  it('renders React elements in options', () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    const button = screen.getByRole('button', { name: 'Select an option' });

    // Open dropdown
    fireEvent.click(button);

    // Check that plain text options are rendered
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();

    // Check that React element in the third option is rendered correctly
    const customOption = screen.getByText('Custom Option 3');
    expect(customOption).toBeInTheDocument();
    expect(customOption).toHaveStyle('color: red');
  });

  it('toggles dropdown on button click', () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    const button = screen.getByRole('button', { name: 'Select an option' });

    // Initially closed
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    // Open on click
    fireEvent.click(button);
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // Close on another click
    fireEvent.click(button);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('selects an option and closes the dropdown', () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    const button = screen.getByRole('button', { name: 'Select an option' });

    // Open dropdown
    fireEvent.click(button);
    const option = screen.getByText('Option 2');
    fireEvent.click(option);

    // Check if onSelect was called
    expect(onSelect).toHaveBeenCalledWith('option2');
    expect(onSelect).toHaveBeenCalledTimes(1);

    // Dropdown should be closed
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('handles keyboard navigation and selection', () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    const button = screen.getByRole('button', { name: 'Select an option' });

    // Open dropdown
    fireEvent.click(button);
    const option1 = screen.getByText('Option 1');

    // Focus on the first option and press Enter to select it
    fireEvent.keyDown(option1, { key: 'Enter' });
    expect(onSelect).toHaveBeenCalledWith('option1');
    expect(onSelect).toHaveBeenCalledTimes(1);

    // Open dropdown
    fireEvent.click(button);
    const option2 = screen.getByText('Option 2');

    // Focus on the second option and press Space to select it
    fireEvent.keyDown(option2, { key: ' ' });
    expect(onSelect).toHaveBeenCalledWith('option2');
    expect(onSelect).toHaveBeenCalledTimes(2);
  });

  it('closes dropdown on Escape key', () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    const button = screen.getByRole('button', { name: 'Select an option' });

    // Open dropdown
    fireEvent.click(button);
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // Press Escape to close
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('does not respond to Tab key if dropdown is closed', () => {
    render(<Dropdown options={options} onSelect={onSelect} />);
    const button = screen.getByRole('button', { name: 'Select an option' });

    // Ensure dropdown is closed
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    // Press Tab key
    fireEvent.keyDown(button, { key: 'Tab' });

    // Nothing should happen
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(onSelect).not.toHaveBeenCalled();
  });
});
