import { themeVars } from '../constants/theme/themeConstants.ts';

import type { EfficientTheme, Theme } from '../types/themeTypes.ts';

export const applyThemeVariables = (theme: Theme) => {
  const currentTheme: EfficientTheme =
    theme in themeVars ? (theme as EfficientTheme) : getSystemTheme();

  const themeVariables = themeVars[currentTheme];

  Object.entries(themeVariables).forEach(([key, value]) =>
    document.documentElement.style.setProperty(key, value)
  );
};

export const getSystemTheme = (): EfficientTheme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const getSavedTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme | null;

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  if (!savedTheme || savedTheme === 'system') {
    return getSystemTheme();
  }

  return 'custom';
};
