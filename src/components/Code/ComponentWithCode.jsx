import { wrapperCodeClass } from '../../constants/highlight.const';

// eslint-disable-next-line react/prop-types
export const ComponentWithCode = ({ children }) => (
  <div className={wrapperCodeClass}>
    {children}
  </div>
);
