import { render, screen } from '../../test/testUtils.tsx';
import { I18nMarkdownViewerWithAnchors } from './I18nMarkdownViewerWithAnchors.tsx';
import { useParams } from 'react-router';
import { useSystemTheme } from '../../hooks/theme/useSystemTheme.ts';
import { useI18nMarkdownLoader } from '../../hooks/markdown/useI18nMarkdownLoader.ts';
import { useMarkdownAnchors } from '../../hooks/markdown/useMarkdownAnchors.ts';

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as unknown as object),
  useParams: jest.fn(),
}));
// mock useSystemTheme to fix error
jest.mock('../../hooks/theme/useSystemTheme.ts', () => ({
  useSystemTheme: jest.fn(),
}));
jest.mock('../../hooks/markdown/useI18nMarkdownLoader.ts', () => ({
  useI18nMarkdownLoader: jest.fn(),
}));
jest.mock('../../hooks/markdown/useMarkdownAnchors.ts', () => ({
  useMarkdownAnchors: jest.fn(),
}));

describe('I18nMarkdownViewerWithAnchors', () => {
  const mockUseParams = useParams as jest.Mock;
  const mockUseI18nMarkdownLoader = useI18nMarkdownLoader as jest.Mock;
  const mockUseSystemTheme = useSystemTheme as jest.Mock;
  const mockUseMarkdownAnchors = useMarkdownAnchors as jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();

    mockUseParams.mockReturnValue({
      topic: 'test-topic',
      section: 'test-section',
    });
    mockUseSystemTheme.mockReturnValue('dark');
    mockUseMarkdownAnchors.mockReturnValue([
      { id: 'test-id', text: 'Test Id', spacing: false },
      { id: 'тест-айди-(1)?', text: 'Тест айди (1)?', spacing: true },
    ]);
    mockUseI18nMarkdownLoader.mockReturnValue({
      content: 'Test Markdown Content',
      isLoading: false,
      error: null,
    });
  });

  it('renders loading state correctly', () => {
    mockUseI18nMarkdownLoader.mockReturnValue({
      content: null,
      isLoading: true,
      error: null,
    });

    render(<I18nMarkdownViewerWithAnchors />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.queryByText('Test Markdown Content')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('renders error state correctly', () => {
    mockUseI18nMarkdownLoader.mockReturnValue({
      content: null,
      isLoading: false,
      error: 'Failed to load content',
    });

    render(<I18nMarkdownViewerWithAnchors />);

    expect(screen.getByText('Failed to load content')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Markdown Content')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('renders markdown content successfully', () => {
    render(<I18nMarkdownViewerWithAnchors />);

    expect(screen.getByText('Test Markdown Content')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('Test Id')).toBeInTheDocument();
    expect(screen.getByText('Тест айди (1)?')).toBeInTheDocument();
  });

  it('applies dark theme correctly', () => {
    mockUseSystemTheme.mockReturnValue('dark');

    const { container } = render(<I18nMarkdownViewerWithAnchors />);

    expect(container.querySelector('.prose-invert')).toBeInTheDocument();
  });

  it('applies light theme correctly', () => {
    mockUseSystemTheme.mockReturnValue('light');

    const { container } = render(<I18nMarkdownViewerWithAnchors />);

    expect(container.querySelector('.prose-invert')).not.toBeInTheDocument();
  });

  it('renders only markdown content when useMarkdownAnchors returns an empty array', () => {
    mockUseMarkdownAnchors.mockReturnValue(null);

    render(<I18nMarkdownViewerWithAnchors />);

    expect(screen.getByText('Test Markdown Content')).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('renders markdown content with anchors when useMarkdownAnchors returns data', () => {
    render(<I18nMarkdownViewerWithAnchors />);

    expect(screen.getByText('Test Markdown Content')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Test Id')).toBeInTheDocument();
    expect(screen.getByText('Тест айди (1)?')).toBeInTheDocument();
  });

  it('handles duplicate anchors correctly', () => {
    mockUseMarkdownAnchors.mockReturnValue([
      { id: 'duplicate-anchor', text: 'Duplicate Anchor' },
      { id: 'duplicate-anchor', text: 'Duplicate Anchor' },
    ]);

    render(<I18nMarkdownViewerWithAnchors />);

    expect(screen.getByText('Test Markdown Content')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getAllByText('Duplicate Anchor')).toHaveLength(2);
  });

  it('navigates to the correct anchor section on click', () => {
    render(<I18nMarkdownViewerWithAnchors />);

    // Emulate a scroll target for the first anchor
    const scrollTarget = document.createElement('div');
    scrollTarget.id = 'test-id';
    document.body.appendChild(scrollTarget);

    screen.getByText('Test Id').click();

    expect(document.getElementById('test-id')).toBeInTheDocument();

    document.body.removeChild(scrollTarget);
  });

  it('updates content and anchors when data changes', async () => {
    const { rerender } = render(<I18nMarkdownViewerWithAnchors />);

    expect(screen.getByText('Test Markdown Content')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('Test Id')).toBeInTheDocument();

    mockUseI18nMarkdownLoader.mockReturnValue({
      content: 'Updated Markdown Content',
      isLoading: false,
      error: null,
    });

    mockUseMarkdownAnchors.mockReturnValue([
      { id: 'updated-anchor', text: 'Updated Anchor' },
    ]);

    rerender(<I18nMarkdownViewerWithAnchors />);

    expect(screen.queryByText('Test Markdown Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Id')).not.toBeInTheDocument();
    expect(screen.getByText('Updated Markdown Content')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Updated Anchor')).toBeInTheDocument();
  });

  it('renders error state when both isLoading and error are true', () => {
    mockUseI18nMarkdownLoader.mockReturnValue({
      content: null,
      isLoading: true,
      error: 'Failed to load content',
    });

    render(<I18nMarkdownViewerWithAnchors />);

    expect(screen.getByText('Failed to load content')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Markdown Content')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
