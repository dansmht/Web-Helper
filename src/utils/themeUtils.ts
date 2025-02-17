import { isHexColor, isObject } from './helpers.ts';
import { themeVars } from '../constants/theme/themeConstants.ts';
import { LocalStorageKeys } from '../constants/localStorageKeys.ts';

import type {
  EfficientTheme,
  Theme,
  ThemeCssVarsKeys,
} from '../types/themeTypes.ts';

export const applyThemeVariables = (themeVariables: Record<string, string>) => {
  Object.entries(themeVariables).forEach(([variable, value]) => {
    document.documentElement.style.setProperty(variable, value);
  });
};

export const applyThemeVariablesByTheme = (theme: Theme) => {
  const isCustomTheme = theme === 'custom';

  const effectiveTheme =
    theme in themeVars ? (theme as EfficientTheme) : getSystemTheme();

  const themeVariables = isCustomTheme
    ? getCustomThemeVars()
    : themeVars[effectiveTheme];

  applyThemeVariables(themeVariables);
};

export const getThemeFromLocalStorage = () =>
  localStorage.getItem(LocalStorageKeys.THEME) as Theme | null;

export const getSystemTheme = (): EfficientTheme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const getSavedTheme = (): Theme => {
  const savedTheme = getThemeFromLocalStorage();
  const validThemes: Theme[] = ['system', 'light', 'dark'];

  if (!savedTheme) {
    return 'system';
  }

  return validThemes.includes(savedTheme) ? savedTheme : 'custom';
};

export const getThemeVars = (theme: Theme | null) => {
  if (!theme || theme === 'system') {
    return getSystemThemeVars();
  }
  if (theme === 'custom') {
    return getCustomThemeVars();
  }
  return themeVars[theme];
};

export const getSystemThemeVars = () => themeVars[getSystemTheme()];

export const getCustomThemeVars = () => {
  const storedCustomThemeVars = localStorage.getItem(
    LocalStorageKeys.CUSTOM_THEME_VARIABLES
  );

  if (storedCustomThemeVars) {
    try {
      const themeCssVarsKeys = Object.keys(
        themeVars.light
      ) as ThemeCssVarsKeys[];
      const parsedTheme = JSON.parse(storedCustomThemeVars) as Record<
        string,
        string
      >;

      if (isObject(parsedTheme)) {
        const isParsedThemeValid = themeCssVarsKeys.every(
          (key) => key in parsedTheme && isHexColor(parsedTheme[key])
        );

        if (isParsedThemeValid) return parsedTheme;
      }
    } catch {
      // Parsing failed, fallback below
    }
  }

  return getSystemThemeVars();
};

export const loadTheme = () => {
  const theme = getThemeFromLocalStorage();

  const themeCssVars = getThemeVars(theme);

  applyThemeVariables(themeCssVars);
};
