import { SectionCardListContainer } from '../../components/SectionCardListContainer/SectionCardListContainer.tsx';
import { SectionCardLink } from '../../components/SectionCardLink/SectionCardLink.tsx';
import { SectionCardLinkSoon } from '../../components/SectionCardLink/SectionCardLinkSoon.tsx';

import { useTitle } from '../../hooks/useTitle.ts';

import type { SectionCardsData } from '../../types/sectionCards.ts';

type SectionCardsPageProps = SectionCardsData;

export const SectionCardsPage = ({
  documentTitle,
  cardLinks,
  cardSoonLinks,
}: SectionCardsPageProps) => {
  useTitle(documentTitle);

  return (
    <SectionCardListContainer>
      {cardLinks.map(({ title, to }) => (
        <SectionCardLink key={title} title={title} to={to} />
      ))}

      {cardSoonLinks.map(({ title }) => (
        <SectionCardLinkSoon key={title} title={title} />
      ))}
    </SectionCardListContainer>
  );
};
