import { SectionCardListContainer } from '../../components/SectionCardListContainer/SectionCardListContainer.tsx';
import { SectionCardLink } from '../../components/SectionCardLink/SectionCardLink.tsx';
import { SectionCardLinkSoon } from '../../components/SectionCardLink/SectionCardLinkSoon.tsx';

import { useTitle } from '../../hooks/useTitle.ts';

type SectionCardsPageProps = {
  documentTitle: string;
  cardLinks: {
    title: string;
    to: string;
  }[];
  cardSoonLinks: {
    title: string;
  }[];
};

export const SectionCardsPage = ({
  documentTitle,
  cardLinks,
  cardSoonLinks,
}: SectionCardsPageProps) => {
  useTitle(documentTitle);

  return (
    <SectionCardListContainer>
      {cardLinks.map(({ title, to }) => (
        <SectionCardLink title={title} to={to} />
      ))}

      {cardSoonLinks.map(({ title }) => (
        <SectionCardLinkSoon title={title} />
      ))}
    </SectionCardListContainer>
  );
};
