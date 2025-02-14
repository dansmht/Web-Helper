import type {
  EfficientTheme,
  ThemeCssVarsKeys,
} from '../../types/themeTypes.ts';

export const themeVars: Record<
  EfficientTheme,
  Record<ThemeCssVarsKeys, string>
> = {
  light: {
    '--color-bg-primary': '#f8fafc',
    '--color-bg-secondary': '#dddddd',
    '--color-text-primary': '#1a202c',
    '--color-text-secondary': '#4a5568',
    '--color-accent': '#2b6cb0',
    '--color-dimmed-accent': '#90cdf4',
  },
  dark: {
    '--color-bg-primary': '#0f172a',
    '--color-bg-secondary': '#030712',
    '--color-text-primary': '#ffffff',
    '--color-text-secondary': '#dddddd',
    '--color-accent': '#74d4ff',
    '--color-dimmed-accent': '#006999',
  },
};
