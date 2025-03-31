import type { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-12 sm:min-w-50 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};
