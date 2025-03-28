import '@testing-library/jest-dom';

import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// mock useSystemTheme to fix error
jest.mock('./src/hooks/theme/useSystemTheme.ts', () => ({
  useSystemTheme: jest.fn(),
}));
