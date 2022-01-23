import { FC } from "react";

export const Code: FC<{}> = ({ children }) => (
  <pre>
    <code className="code transition duration-500">
      {children}
    </code>
  </pre>
);
