import { FC } from 'react';

import { wrapperCodeClass } from '../../utils/constants/highlight.constants';

export const ComponentWithCode: FC<{}> = ({ children }) => (
  <div className={wrapperCodeClass}>
    {children}
  </div>
);
