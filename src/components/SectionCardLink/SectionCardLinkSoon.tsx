import { linkClassName, linkWrapperClassName } from './_constants.ts';

type SectionCardLinkSoonProps = {
  title: string;
};

export const SectionCardLinkSoon = ({ title }: SectionCardLinkSoonProps) => {
  return (
    <li className={linkWrapperClassName}>
      <span className={`${linkClassName} cursor-default`}>{title} (Soon)</span>
    </li>
  );
};
