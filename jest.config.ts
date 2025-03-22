import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.app.json' }],
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^react-markdown$': '<rootDir>/src/__mocks__/ReactMarkdown.tsx',
    '^remark-gfm$': '<rootDir>/src/__mocks__/remarkGfm.ts',
    '^rehype-highlight$': '<rootDir>/src/__mocks__/rehypeHighlight.ts',
  },
};

export default config;
