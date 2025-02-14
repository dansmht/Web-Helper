export type EfficientTheme = 'light' | 'dark';
export type Theme = EfficientTheme | 'system' | 'custom';

export type ThemeCssVars = {
  '--color-bg-primary': string;
  '--color-bg-secondary': string;
  '--color-text-primary': string;
  '--color-text-secondary': string;
  '--color-accent': string;
  '--color-dimmed-accent': string;
};
export type ThemeCssVarsKeys = keyof ThemeCssVars;

export type ThemeContextProps = {
  theme: Theme;
  updateTheme: (theme: Theme) => void;
};
