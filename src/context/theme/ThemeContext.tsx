import { createContext, useContext, useState } from 'react';

import { useSkipFirstRenderEffect } from '../../hooks/useSkipFirstRenderEffect.ts';
import { useSystemTheme } from '../../hooks/theme/useSystemTheme.ts';
import {
  applyThemeVariablesByTheme,
  getSavedTheme,
} from '../../utils/themeUtils.ts';

import type { PropsWithChildren } from 'react';
import type { ThemeContextProps, Theme } from '../../types/themeTypes.ts';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(getSavedTheme);
  const systemTheme = useSystemTheme();

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);

    if (newTheme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', newTheme);
    }
  };

  useSkipFirstRenderEffect(() => {
    applyThemeVariablesByTheme(theme);
  }, [theme, systemTheme]);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
