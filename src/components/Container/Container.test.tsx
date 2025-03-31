import { render, screen } from '../../test/testUtils.tsx';
import { Container } from './Container.tsx';

describe('Container', () => {
  it('renders without crashing', () => {
    render(<Container>Test Content</Container>);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies correct classes to the container', () => {
    render(<Container>Test Content</Container>);

    expect(screen.getByText('Test Content')).toHaveClass(
      'mx-auto max-w-7xl px-4 pb-12 sm:min-w-50 sm:px-6 lg:px-8'
    );
  });

  it('renders children correctly', () => {
    render(
      <Container>
        <span>Child Element</span>
      </Container>
    );

    expect(screen.getByText('Child Element')).toBeInTheDocument();
  });
});
