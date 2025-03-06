import { ThemeDropdown } from '../ThemeDropdown/ThemeDropdown.tsx';
// TODO Add link to main page
export const Header = () => {
  return (
    <div className="mb-4 flex items-center justify-between px-2 py-6 lg:mb-8">
      <h1 className="text-2xl font-semibold select-none">Web Helper</h1>
      <div className="flex items-center gap-2">
        <ThemeDropdown />
      </div>
    </div>
  );
};
