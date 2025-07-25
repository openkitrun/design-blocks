const path = require('path');

/** @type {import('jest').Config} */
module.exports = {
  preset: 'react-native',
  rootDir: '.',
  roots: ['<rootDir>/packages'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|react-native-reanimated' +
      '|@testing-library' +
      ')/)',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/packages/.+/build/',
  ],
  moduleNameMapper: {
    '^react$': path.join(__dirname, 'node_modules/react'),
    '^react-test-renderer$': path.join(__dirname, 'node_modules/react-test-renderer'),
  },
};
