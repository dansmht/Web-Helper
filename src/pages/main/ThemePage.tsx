import { useState } from 'react';

import { useTheme } from '../../context/theme/ThemeContext.tsx';
import {
  applyThemeVariables,
  getCustomThemeVars,
} from '../../utils/themeUtils.ts';
import { LocalStorageKeys } from '../../constants/localStorageKeys.ts';

export const ThemePage = () => {
  const { theme, updateTheme } = useTheme();
  const [cssVariables, setCssVariables] =
    useState<Record<string, string>>(getCustomThemeVars);

  const handleColorChange = (variable: string, color: string) => {
    document.documentElement.style.setProperty(variable, color);
    setCssVariables((prev) => ({
      ...prev,
      [variable]: color,
    }));
  };

  const saveTheme = () => {
    localStorage.setItem(
      LocalStorageKeys.CUSTOM_THEME_VARIABLES,
      JSON.stringify(cssVariables)
    );
    updateTheme('custom');
  };

  const resetTheme = () => {
    localStorage.removeItem(LocalStorageKeys.CUSTOM_THEME_VARIABLES);
    updateTheme('system');
    setCssVariables(getCustomThemeVars());
  };

  const applyTheme = () => {
    applyThemeVariables(cssVariables);
  };

  // TODO
  return (
    <div className="bg-bg-primary text-text-primary transition-smooth flex flex-col items-center justify-center">
      <h1>Theme Switcher</h1>
      <p className="text-text-secondary">
        Current Theme: <strong>{theme}</strong>
      </p>
      <div className="flex gap-x-8">
        <button
          onClick={saveTheme}
          className="bg-bg-secondary text-text-primary border-ring mt-4 rounded-md px-4 py-2"
        >
          Save
        </button>
        <button
          onClick={resetTheme}
          className="bg-bg-secondary text-text-primary border-ring mt-4 rounded-md px-4 py-2"
        >
          Reset
        </button>
        <button
          onClick={applyTheme}
          className="bg-bg-secondary text-text-primary border-ring mt-4 rounded-md px-4 py-2"
        >
          Apply
        </button>
      </div>

      <div className="mt-4">
        {Object.entries(cssVariables).map(([variable, value]) => (
          <div key={variable} className="mb-3">
            <label htmlFor={variable} className="mr-2">
              {variable}:
            </label>
            <input
              type="color"
              id={variable}
              value={value}
              onChange={(e) => handleColorChange(variable, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
