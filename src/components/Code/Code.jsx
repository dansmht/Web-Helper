import './Code.css';
// eslint-disable-next-line react/prop-types
export const Code = ({ children }) => (
  <pre className="preformatted">
    <code className="code">
      {children}
    </code>
  </pre>
);
