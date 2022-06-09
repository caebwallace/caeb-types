const { defaults } = require('jest-config');
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    modulePathIgnorePatterns: ['./dist', './docs', './__mocks__'],
    moduleNameMapper: {
        '^@clients/(.*)': '<rootDir>/src/clients/$1',
        '^@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
        '^@lib/(.*)': '<rootDir>/src/lib/$1',
        '^@models/(.*)': '<rootDir>/src/models/$1',
        '^@utils/(.*)': '<rootDir>/src/utils/$1',
    },
};
