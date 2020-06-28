module.exports = {
  preset: '@shelf/jest-mongodb',
  testPathIgnorePatterns: [
    "/node_modules/",
    ".tmp",
    ".cache"
  ],
  rootDir: ".",
  testEnvironment: "node",
  testTimeout: 12000,
  testMatch: [
    "<rootDir>/tests/*.test.js"
  ],
  watchman: false,
  globals: {
    context: {}
  }
};
