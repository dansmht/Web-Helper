import { render, screen } from '../../test/testUtils.tsx';
import { AnchorList } from './AnchorList';

describe('AnchorList Component', () => {
  const mockAnchors = [
    { id: 'section-1', text: 'Section 1', spacing: false },
    { id: 'section-2', text: 'Section 2', spacing: true },
  ];

  it('renders a navigation container', () => {
    render(<AnchorList anchors={mockAnchors} />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  it('renders a list of anchor links', () => {
    render(<AnchorList anchors={mockAnchors} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockAnchors.length);
  });

  it('renders anchors with correct href and text', () => {
    render(<AnchorList anchors={mockAnchors} />);
    mockAnchors.forEach((anchor) => {
      const link = screen.getByText(anchor.text);
      expect(link).toHaveAttribute('href', `#${anchor.id}`);
    });
  });

  it('applies spacing class when "spacing" is true', () => {
    render(<AnchorList anchors={mockAnchors} />);
    const spacedLink = screen.getByText('Section 2');
    expect(spacedLink).toHaveClass('ml-6');
  });

  it('does not apply spacing class when "spacing" is false', () => {
    render(<AnchorList anchors={mockAnchors} />);
    const nonSpacedLink = screen.getByText('Section 1');
    expect(nonSpacedLink).not.toHaveClass('ml-6');
  });
});
