import { render, screen } from '../../test/testUtils.tsx';
import { SectionCardLink } from './SectionCardLink';

import type { PropsWithChildren } from 'react';

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as unknown as object),
  Link: ({
    to,
    className,
    children,
    ...rest
  }: PropsWithChildren & { to: string; className?: string }) => (
    <a href={to} className={className} {...rest} data-testid="mock-link">
      {children}
    </a>
  ),
}));

jest.mock('./_constants.ts', () => ({
  linkClassName: 'link-class',
  linkWrapperClassName: 'link-wrapper-class',
}));

describe('SectionCardLink', () => {
  const linkProps = {
    title: 'Test Title',
    to: '/test-url',
  };

  it('renders the link with the correct title', () => {
    render(<SectionCardLink {...linkProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('passes the correct `to` prop to the Link component', () => {
    render(<SectionCardLink {...linkProps} />);

    expect(screen.getByTestId('mock-link')).toHaveAttribute(
      'href',
      '/test-url'
    );
  });

  it('applies the correct CSS classes to the wrapper and link', () => {
    const { container } = render(<SectionCardLink {...linkProps} />);

    const listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass('link-wrapper-class');

    const link = screen.getByTestId('mock-link');
    expect(link).toHaveClass('link-class', 'border-ring', 'hover:text-accent');
  });

  it('passes additional props to the link', () => {
    render(<SectionCardLink {...linkProps} data-custom="custom-attribute" />);

    expect(screen.getByTestId('mock-link')).toHaveAttribute(
      'data-custom',
      'custom-attribute'
    );
  });
});
