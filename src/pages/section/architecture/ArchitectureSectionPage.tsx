import { SectionCardListContainer } from '../../../components/SectionCardListContainer/SectionCardListContainer.tsx';
import { SectionCardLink } from '../../../components/SectionCardLink/SectionCardLink.tsx';

export const ArchitectureSectionPage = () => {
  return (
    <SectionCardListContainer>
      <SectionCardLink title="FSD" to="/architecture/fsd" />
    </SectionCardListContainer>
  );
};
