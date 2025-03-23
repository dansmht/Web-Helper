import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.app.json' }],
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/**/App.tsx',
    '!src/**/main.tsx',
    '!src/routing/*.{ts,tsx}',
    '!src/constants/**',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  moduleNameMapper: {
    '^react-markdown$': '<rootDir>/src/__mocks__/ReactMarkdown.tsx',
    '^remark-gfm$': '<rootDir>/src/__mocks__/remarkGfm.ts',
    '^rehype-highlight$': '<rootDir>/src/__mocks__/rehypeHighlight.ts',
  },
};

export default config;
