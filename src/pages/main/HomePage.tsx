import { SectionCardLink } from '../../components/SectionCardLink/SectionCardLink.tsx';
import { SectionCardLinkSoon } from '../../components/SectionCardLink/SectionCardLinkSoon.tsx';
import { ThemePage } from './ThemePage.tsx';

export const HomePage = () => {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <SectionCardLink title="React" to="/react" />
        <SectionCardLinkSoon title="JavaScript" />
        <SectionCardLinkSoon title="TypeScript" />
      </ul>
      <ThemePage />
    </>
  );
};
