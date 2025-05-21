import { SectionCardListContainer } from '../../components/SectionCardListContainer/SectionCardListContainer.tsx';
import { SectionCardLink } from '../../components/SectionCardLink/SectionCardLink.tsx';
import { SectionCardLinkSoon } from '../../components/SectionCardLink/SectionCardLinkSoon.tsx';

import { useTranslation } from '../../context/i18n/I18nContext.tsx';
import { useTitle } from '../../hooks/useTitle.ts';
import { useFavouritesStore } from '../../hooks/store/useFavouritesStore.ts';
import { useDebouncedQueryFilter } from '../../hooks/useDebouncedQueryFilter.ts';
import { sortCardsByFavourites } from '../../utils/sortCardsByFavourites.ts';
import { filterByTitle } from './_utils.ts';

import type { ChangeEvent } from 'react';
import type { SectionCardsData } from '../../types/sectionCards.ts';

type SectionCardsPageProps = SectionCardsData;

export const SectionCardsPage = ({
  documentTitle,
  cards,
  disableFilter,
}: SectionCardsPageProps) => {
  const { t } = useTranslation();

  const favourites = useFavouritesStore((state) => state.favourites);

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
  const sortedCards = sortCardsByFavourites(displayedCards, favourites, documentTitle);

  return (
    <>
      {!disableFilter && (
        <input
          type="text"
          placeholder={`${t('search')}...`}
          value={filter}
          onChange={onFilterChange}
          className="border-ring mb-8 ml-auto block rounded-md p-2"
        />
      )}

      <SectionCardListContainer>
        {sortedCards.map(({ id, title, to }) =>
          to ? (
            <SectionCardLink key={id} id={id} title={title} to={to} sectionKey={documentTitle} />
          ) : (
            <SectionCardLinkSoon key={title} title={title} />
          )
        )}
      </SectionCardListContainer>
    </>
  );
};
