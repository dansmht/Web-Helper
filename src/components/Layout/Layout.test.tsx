import { render, screen } from '../../test/testUtils.tsx';
import { Layout } from './Layout';

import type { PropsWithChildren } from 'react';

jest.mock('../Container/Container.tsx', () => ({
  Container: ({ children }: PropsWithChildren) => (
    <div data-testid="mock-container">{children}</div>
  ),
}));

jest.mock('../Header/Header.tsx', () => ({
  Header: () => <header data-testid="mock-header">Header</header>,
}));

describe('Layout', () => {
  it('renders the Container and Header components', () => {
    render(<Layout>Test Content</Layout>);

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-container')).toBeInTheDocument();
  });

  it('renders children inside the container', () => {
    render(<Layout>Test Content</Layout>);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies correct class names for styling', () => {
    const { container } = render(<Layout>Test Content</Layout>);

    expect(container.firstChild).toHaveClass(
      'bg-bg-secondary',
      'text-text-primary',
      'transition-smooth',
      'flex-auto'
    );
  });
});
