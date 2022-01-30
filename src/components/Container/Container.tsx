import { FC } from 'react';

export const Container: FC = ({ children }) => (
  <div className="max-w-5xl w-full mx-auto px-4 h-full flex-grow flex flex-col">
    {children}
  </div>
);
