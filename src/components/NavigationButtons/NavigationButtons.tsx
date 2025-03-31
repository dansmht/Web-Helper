import { NavigationButton } from './NavigationButton.tsx';

import PreviousIcon from '../../assets/icons/previous.svg?react';
import NextIcon from '../../assets/icons/next.svg?react';

import type { NavigationInfo } from '../../types/sharedTypes.ts';

type NavigationButtonsProps = NavigationInfo;

export const NavigationButtons = ({
  previousPage,
  nextPage,
  previousLabel = 'Previous',
  nextLabel = 'Next',
}: NavigationButtonsProps) => {
  if (!previousPage && !nextPage) return null;

  return (
    <div className="flex flex-wrap justify-between gap-2">
      {previousPage ? (
        <NavigationButton
          to={previousPage}
          icon={<PreviousIcon />}
          iconPosition="left"
        >
          {previousLabel}
        </NavigationButton>
      ) : (
        <div />
      )}

      {nextPage && (
        <NavigationButton
          to={nextPage}
          icon={<NextIcon />}
          iconPosition="right"
        >
          {nextLabel}
        </NavigationButton>
      )}
    </div>
  );
};
