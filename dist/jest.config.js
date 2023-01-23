"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const root = (0, path_1.resolve)(__dirname);
exports.default = {
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
//# sourceMappingURL=jest.config.js.map