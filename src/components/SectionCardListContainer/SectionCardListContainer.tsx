import { PropsWithChildren } from 'react';

export const SectionCardListContainer = ({ children }: PropsWithChildren) => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
      {children}
    </ul>
  );
};
