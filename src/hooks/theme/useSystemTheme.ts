import { useEffect, useState } from 'react';

import { getSystemTheme } from '../../utils/themeUtils.ts';

export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      setSystemTheme(getSystemTheme());
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return systemTheme;
};
