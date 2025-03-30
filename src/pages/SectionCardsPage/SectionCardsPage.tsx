import { SectionCardListContainer } from '../../components/SectionCardListContainer/SectionCardListContainer.tsx';
import { SectionCardLink } from '../../components/SectionCardLink/SectionCardLink.tsx';
import { SectionCardLinkSoon } from '../../components/SectionCardLink/SectionCardLinkSoon.tsx';

import { useTitle } from '../../hooks/useTitle.ts';
import { useDebouncedQueryFilter } from '../../hooks/useDebouncedQueryFilter.ts';
import { filterByTitle } from './_utils.ts';

import type { ChangeEvent } from 'react';
import type { SectionCardsData } from '../../types/sectionCards.ts';

type SectionCardsPageProps = SectionCardsData;

export const SectionCardsPage = ({
  documentTitle,
  cards,
  disableFilter,
}: SectionCardsPageProps) => {
  useTitle(documentTitle);

  const {
    filteredItems: filteredCards,
    filter,
    setFilter,
  } = useDebouncedQueryFilter({
    initialItems: cards,
    filterPredicate: filterByTitle,
    searchParamKey: 'topic',
  });

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const displayedCards = disableFilter ? cards : filteredCards;

  return (
    <>
      {!disableFilter && (
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={onFilterChange}
          className="border-ring mb-8 ml-auto block rounded-md p-2"
        />
      )}

      <SectionCardListContainer>
        {displayedCards.map(({ title, to }) =>
          to ? (
            <SectionCardLink key={title} title={title} to={to} />
          ) : (
            <SectionCardLinkSoon key={title} title={title} />
          )
        )}
      </SectionCardListContainer>
    </>
  );
};
