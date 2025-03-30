import { render, screen } from '../../test/testUtils.tsx';
import { SectionCardLinkSoon } from './SectionCardLinkSoon';

jest.mock('../../context/i18n/I18nContext.tsx', () => ({
  ...(jest.requireActual(
    '../../context/i18n/I18nContext'
  ) as unknown as object),
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        soon: 'coming soon',
      };
      return translations[key] || key;
    },
  }),
}));

describe('SectionCardLinkSoon', () => {
  it('renders the component without errors', () => {
    render(<SectionCardLinkSoon title="Test Title" />);

    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });

  it('displays the title and translated "soon" label', () => {
    render(<SectionCardLinkSoon title="Test Title" />);

    expect(screen.getByText('Test Title (coming soon)')).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    const { container } = render(<SectionCardLinkSoon title="Test Title" />);

    const listItem = container.firstChild as HTMLElement;
    expect(listItem).toHaveClass(
      'ring-text-secondary',
      'ring-2',
      'bg-bg-primary',
      'text-text-secondary',
      'h-36',
      'rounded-lg',
      'transition-smooth'
    );

    const span = screen.getByText(/Test Title/i).closest('span');
    expect(span).toHaveClass(
      'cursor-default',
      'flex',
      'h-full',
      'w-full',
      'items-center',
      'justify-center',
      'text-2xl'
    );
  });

  it('renders translated text for "soon"', () => {
    render(<SectionCardLinkSoon title="Test Title" />);

    expect(screen.getByText(/\(coming soon\)/i)).toBeInTheDocument();
  });
});
