import { SectionCardLink } from '../../../components/SectionCardLink/SectionCardLink.tsx';

export const ArchitectureSectionPage = () => {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <SectionCardLink title="FSD" to="/architecture/fsd" />
      </ul>
    </>
  );
};
