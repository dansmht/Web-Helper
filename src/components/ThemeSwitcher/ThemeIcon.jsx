import { memo } from 'react';

// eslint-disable-next-line react/prop-types
export const ThemeIcon = memo(({ theme }) => {
  let d;

  switch (theme) {
    case 'light':
      // sun
      d = 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z';
      break;
    case 'dark':
      // moon
      d = 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z';
      break;
    default:
      // desktop
      d = 'M9.75 17 9 20 8 21h8l-1-1-.75-3M5 17H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5A2 2 0 0 0 3 5V15A2 2 0 0 0 5 17Z';
      break;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    </svg>
  );
});

ThemeIcon.displayName = 'ThemeIcon';
