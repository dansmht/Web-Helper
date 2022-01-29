import { Popup } from '../../../components/shared/Popup/Popup';
import { PopupItem } from '../../../components/shared/Popup/PopupItem';
import { Code } from '../../../components/ComponentWithCode/Code/Code';
import { ComponentWithCode } from '../../../components/ComponentWithCode/ComponentWithCode';

import { exampleCode } from '../../../utils/constants/example-code.constants';
import { useCodeHighlight } from '../../../hooks/useCodeHighlight';

export const HomePage = () => {
  useCodeHighlight();

  return (
    <div>
      Home Page
      <Popup icon="moon">
        {({ close }) => [1, 2, 3].map((el) => (
          <PopupItem key={el} close={close}>{el}</PopupItem>
        ))}
      </Popup>
      <Popup icon="moon">
        <PopupItem>
          Lol
        </PopupItem>
      </Popup>
      <ComponentWithCode>
        <Code>
          {exampleCode}
        </Code>
      </ComponentWithCode>
    </div>
  );
};
