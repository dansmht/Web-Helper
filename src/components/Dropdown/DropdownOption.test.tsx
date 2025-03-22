import { render, screen } from '../../test/testUtils.tsx';
import { DropdownOption } from './DropdownOption.tsx';

describe('DropdownOption', () => {
  it('renders correctly with an icon and translated label', () => {
    render(
      <DropdownOption label="test.label" icon={<svg data-testid="icon" />} />
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('test.label')).toBeInTheDocument();
  });

  it('renders as a Link when "linkTo" prop is provided', () => {
    render(
      <DropdownOption label="test.label" linkTo="/test-path" icon={null} />
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/test-path');
  });

  it('renders as a div when "linkTo" prop is not provided', () => {
    const { container } = render(
      <DropdownOption label="test.label" icon={null} />
    );

    const divElement = container.querySelector('div');
    expect(divElement).toBeInTheDocument();
    expect(divElement?.tagName).toBe('DIV');
  });
});
