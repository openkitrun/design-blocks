module.exports = {
  preset: "react-native",
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules",
    "<rootDir>/packages/(.+)/build/",
  ],
  // collectCoverageFrom: [
  //   "packages/**/*.{js,jsx,ts,tsx}",
  //   "!@blocks-primitives/.ci/*.tsx",
  // ],
  globals: {
    __DEV__: true,
  },
  setupFilesAfterEnv: [
    "@testing-library/react-native/extend-expect",
  ],
};
