module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended"
  ],
  overrides: [
    {
      env: {
        browser: true,
        node: true,
      },
      files: [".eslintrc.js"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  parser: "@babel/eslint-parser",
  rules: {
    "eol-last": "error",
    "no-unused-vars": "warn",
    "no-undef": "warn",
    "react/prop-types": "warn",
  },
};
