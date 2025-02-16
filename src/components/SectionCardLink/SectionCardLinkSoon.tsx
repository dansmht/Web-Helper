import { linkClassName, linkWrapperClassName } from './_constants.ts';

type SectionCardLinkSoonProps = {
  title: string;
};

export const SectionCardLinkSoon = ({ title }: SectionCardLinkSoonProps) => {
  return (
    <li className={`${linkWrapperClassName} ring-text-secondary ring-2`}>
      <span className={`${linkClassName} cursor-default`}>{title} (Soon)</span>
    </li>
  );
};
