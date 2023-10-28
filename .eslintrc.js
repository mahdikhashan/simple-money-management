module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        browser: true,
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
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
