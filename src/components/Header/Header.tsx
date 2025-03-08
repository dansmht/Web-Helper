import { Link } from 'react-router';

import { LanguageDropdown } from '../LanguageDropdown/LanguageDropdown.tsx';
import { ThemeDropdown } from '../ThemeDropdown/ThemeDropdown.tsx';

export const Header = () => {
  return (
    <div className="mb-4 flex items-center justify-between px-2 py-6 lg:mb-8">
      <Link to="/">
        <h1 className="text-2xl font-semibold select-none">Web Helper</h1>
      </Link>

      <div className="flex items-center gap-8">
        <LanguageDropdown />
        <ThemeDropdown />
      </div>
    </div>
  );
};
