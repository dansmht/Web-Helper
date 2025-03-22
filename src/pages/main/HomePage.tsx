import { SectionCardListContainer } from '../../components/SectionCardListContainer/SectionCardListContainer.tsx';
import { SectionCardLink } from '../../components/SectionCardLink/SectionCardLink.tsx';
import { SectionCardLinkSoon } from '../../components/SectionCardLink/SectionCardLinkSoon.tsx';

export const HomePage = () => {
  return (
    <SectionCardListContainer>
      <SectionCardLink title="React" to="/react" />
      <SectionCardLink title="Architecture" to="/architecture" />
      <SectionCardLinkSoon title="JavaScript" />
      <SectionCardLinkSoon title="TypeScript" />
    </SectionCardListContainer>
  );
};
