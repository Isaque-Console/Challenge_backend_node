import { resolve } from "path";
const root = resolve(__dirname);

export default {
  rootDir: `${root}`,
  displayName: 'testes-unitarios',
  collectCoverage: true,
  "testMatch": [
    "**/*.steps.ts",
    "**/*.test.ts"
  ],
  testEnvironment: "node",
  clearMocks: true,
  preset: 'ts-jest',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8"
};
