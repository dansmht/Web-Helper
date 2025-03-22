import { render, screen } from '../../test/testUtils.tsx';
import { I18nMarkdownViewerWithAnchors } from './I18nMarkdownViewerWithAnchors.tsx';
import { useParams } from 'react-router';
import { useSystemTheme } from '../../hooks/theme/useSystemTheme.ts';
import { useI18nMarkdownLoader } from '../../hooks/markdown/useI18nMarkdownLoader.ts';

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as unknown as object),
  useParams: jest.fn(),
}));
jest.mock('../../hooks/theme/useSystemTheme.ts', () => ({
  useSystemTheme: jest.fn(),
}));
jest.mock('../../hooks/markdown/useI18nMarkdownLoader.ts', () => ({
  useI18nMarkdownLoader: jest.fn(),
}));

describe('I18nMarkdownViewerWithAnchors', () => {
  const mockUseParams = useParams as jest.Mock;
  const mockUseI18nMarkdownLoader = useI18nMarkdownLoader as jest.Mock;
  const mockUseSystemTheme = useSystemTheme as jest.Mock;

  beforeEach(() => {
    jest.resetAllMocks();

    mockUseParams.mockReturnValue({ topic: 'test-topic' });
    mockUseSystemTheme.mockReturnValue('dark');
  });

  it('renders loading state correctly', () => {
    mockUseI18nMarkdownLoader.mockReturnValue({
      content: null,
      isLoading: true,
      error: null,
    });

    render(<I18nMarkdownViewerWithAnchors section="react" />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state correctly', () => {
    mockUseI18nMarkdownLoader.mockReturnValue({
      content: null,
      isLoading: false,
      error: 'Failed to load content',
    });

    render(<I18nMarkdownViewerWithAnchors section="react" />);

    expect(screen.getByText('Failed to load content')).toBeInTheDocument();
  });

  it('renders markdown content successfully', () => {
    mockUseI18nMarkdownLoader.mockReturnValue({
      content: 'Test Markdown Content',
      isLoading: false,
      error: null,
    });

    render(<I18nMarkdownViewerWithAnchors section="react" />);

    expect(screen.getByText('Test Markdown Content')).toBeInTheDocument();
  });

  it('applies dark theme correctly', () => {
    mockUseSystemTheme.mockReturnValue('dark');
    mockUseI18nMarkdownLoader.mockReturnValue({
      content: 'Test Markdown Content',
      isLoading: false,
      error: null,
    });

    const { container } = render(
      <I18nMarkdownViewerWithAnchors section="react" />
    );

    expect(container.querySelector('.prose-invert')).toBeInTheDocument();
  });

  it('applies light theme correctly', () => {
    mockUseSystemTheme.mockReturnValue('light');
    mockUseI18nMarkdownLoader.mockReturnValue({
      content: 'Test Markdown Content',
      isLoading: false,
      error: null,
    });

    const { container } = render(
      <I18nMarkdownViewerWithAnchors section="react" />
    );

    expect(container.querySelector('.prose-invert')).not.toBeInTheDocument();
  });
});
