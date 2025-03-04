import type { AnchorLink } from '../../types/sharedTypes.ts';

type AnchorListProps = {
  anchors: AnchorLink[];
};

export const AnchorList = ({ anchors }: AnchorListProps) => {
  // TODO styles
  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <ul>
        {anchors.map((anchor) => (
          <li key={anchor.id}>
            <a href={`#${anchor.id}`} className="text-blue-500 hover:underline">
              {anchor.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
