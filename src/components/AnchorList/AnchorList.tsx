import type { AnchorLink } from '../../types/sharedTypes.ts';

type AnchorListProps = {
  anchors: AnchorLink[];
};

export const AnchorList = ({ anchors }: AnchorListProps) => {
  return (
    <nav className="bg-bg-primary w-fit rounded-xl p-4">
      <ul>
        {anchors.map(({ id, text, spacing }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`text-accent hover:text-dimmed-accent hover:bg-accent/10 transition-smooth ml-2 rounded-md p-1 hover:underline ${spacing && 'ml-6'}`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
