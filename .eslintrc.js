module.exports = {
  env: {
      browser: true,
      node: true,
      es2021: true
  },
  ignorePatterns: [
      ".eslintrc.js",
      "jest.config.js",
      "jest-mongodb-config.js",
      "rollup.config.js",
      "tsconfig.json",
      "tsconfig.build.json"
  ],

  extends: [
      "eslint:recommended",
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: ['./tsconfig.build.json'],
  },
  plugins: ["@typescript-eslint"],
  rules: {
      "@typescript-eslint/ban-ts-comment": "warn"
  }
};
