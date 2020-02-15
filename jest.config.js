module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
  testMatch: ["<rootDir>lib/**/__tests__/**/*.unit.(js|jsx|ts|tsx)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/lib/__mocks__/fileMock.js",
    "\\.(sass|scss)$": "<rootDir>/lib/__mocks__/styleMock.js",
    "^@utils(.*)$": "<rootDir>/lib/_utils$1",
    "^@components(.*)$": "<rootDir>/lib/components$1"
  }
};
