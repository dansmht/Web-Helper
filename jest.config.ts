import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.app.json' }],
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default config;
