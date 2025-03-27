const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" }, // Support @ for alias
  testEnvironment: "jsdom", // Simulate the browser
};

module.exports = createJestConfig(customJestConfig);
