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
    '--color-accent': '#38bdf8',
    '--color-dimmed-accent': '#0ea5e9',
    '--color-bg-hover': '#4755694d',
  },
  dark: {
    '--color-bg-primary': '#0f172a',
    '--color-bg-secondary': '#030712',
    '--color-text-primary': '#ffffff',
    '--color-text-secondary': '#94a3b8',
    '--color-accent': '#38bdf8',
    '--color-dimmed-accent': '#0ea5e9',
    '--color-bg-hover': '#4755694d',
  },
};
