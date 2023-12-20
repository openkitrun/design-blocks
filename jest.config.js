module.exports = {
  preset: "react-native",
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules",
    "<rootDir>/packages/(.+)/dist/",
    "<rootDir>/packages/@blocks-unstyled",
  ],
  // collectCoverageFrom: [
  //   "packages/**/*.{js,jsx,ts,tsx}",
  //   "!@blocks-primitives/.ci/*.tsx",
  // ],
  globals: {
    __DEV__: true,
  },
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
