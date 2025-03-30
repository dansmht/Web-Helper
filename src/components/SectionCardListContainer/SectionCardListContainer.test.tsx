import { render, screen } from '../../test/testUtils.tsx';
import { SectionCardListContainer } from './SectionCardListContainer';

describe('SectionCardListContainer', () => {
  it('renders the component without errors', () => {
    render(<SectionCardListContainer>Test Content</SectionCardListContainer>);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('renders all children elements', () => {
    render(
      <SectionCardListContainer>
        <li>Child 1</li>
        <li>Child 2</li>
        <li>Child 3</li>
      </SectionCardListContainer>
    );

    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('applies the correct CSS classes', () => {
    const { container } = render(
      <SectionCardListContainer>
        <li>Child 1</li>
      </SectionCardListContainer>
    );

    const ul = container.firstChild as HTMLElement;
    expect(ul).toHaveClass(
      'grid',
      'grid-cols-1',
      'gap-4',
      'sm:grid-cols-2',
      'sm:gap-8',
      'lg:grid-cols-3'
    );
  });
});
