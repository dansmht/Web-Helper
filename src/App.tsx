import { SectionCardLink } from './components/SectionCardLink/SectionCardLink.tsx';
import { HighlightedCode } from './components/HighlightedCode/HighlightedCode.tsx';

export const App = () => {
  return (
    <div>
      <SectionCardLink title="React" to="/react" />
      <HighlightedCode code="const qwe = 123;" language="typescript" />
    </div>
  );
};
