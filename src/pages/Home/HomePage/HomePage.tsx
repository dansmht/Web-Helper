import { Code } from '../../../components/ComponentWithCode/Code/Code';
import { ComponentWithCode } from '../../../components/ComponentWithCode/ComponentWithCode';
import { exampleCode } from '../../../utils/constants/example-code.constants';
import { useCodeHighlight } from '../../../hooks/useCodeHighlight';

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
