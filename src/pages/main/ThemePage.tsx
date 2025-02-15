import SystemIcon from '../../assets/icons/system.svg?react';
import LightIcon from '../../assets/icons/light.svg?react';
import DarkIcon from '../../assets/icons/dark.svg?react';
import { useTheme } from '../../context/theme/ThemeContext.tsx';

export const ThemePage = () => {
  const { theme, updateTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      return updateTheme('dark');
    }
    if (theme === 'dark') {
      return updateTheme('system');
    }
    return updateTheme('light');
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Theme Switcher</h1>
      <p style={{ color: 'var(--color-text-secondary)' }}>
        Current Theme: <strong>{theme}</strong>
      </p>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: 'red',
          color: 'var(--color-text-primary)',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
        }}
      >
        <LightIcon />
        <DarkIcon />
        <SystemIcon />
      </button>
    </div>
  );
};
