import { FC } from 'react';

export const Container: FC = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4">
    {children}
  </div>
);
