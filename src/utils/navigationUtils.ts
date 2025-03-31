import { sectionPagesData } from '../constants/sectionCards.ts';

import type { SectionCard } from '../types/sectionCards.ts';
import type { NavigationInfo, Section } from '../types/sharedTypes.ts';

const getCardNavigation = (
  card: SectionCard | undefined,
  type: 'previous' | 'next'
): NavigationInfo | null => {
  if (!card?.to) return null;

  return type === 'previous'
    ? { previousPage: card.to, previousLabel: card.title }
    : { nextPage: card.to, nextLabel: card.title };
};

export const buildTopicNavigation = (
  section: Section,
  topic: string
): NavigationInfo | null => {
  const sectionCards = sectionPagesData[section]?.cards;
  if (!sectionCards) return null;

  const currentPath = `/${section}/${topic}`;
  const index = sectionCards.findIndex((card) => card.to === currentPath);
  if (index === -1) return null;

  const prevNavigation = getCardNavigation(sectionCards[index - 1], 'previous');
  const nextNavigation = getCardNavigation(sectionCards[index + 1], 'next');
  if (!prevNavigation && !nextNavigation) return null;

  return {
    ...prevNavigation,
    ...nextNavigation,
  };
};
