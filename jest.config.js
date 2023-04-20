const config = {
  verbose: true,
  moduleFileExtensions: ["", "json", "js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
}

module.exports = config
