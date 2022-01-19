import { Code } from '../components/Code/Code';
import { ComponentWithCode } from '../components/Code/ComponentWithCode';
import { exampleCode } from '../constants/example-code.const';
import { useCodeHighlight } from '../hooks/useCodeHighlight';

export const HomePage = () => {
  useCodeHighlight();

  return (
    <div>
      Home Page
      <ComponentWithCode>
        <Code>
          {exampleCode}
        </Code>
      </ComponentWithCode>
    </div>
  );
};
