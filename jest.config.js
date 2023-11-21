module.exports = {
  roots: ["<rootDir>/src"],
  testRunner: "jest-circus/runner",
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  setupFiles: [],
  testMatch: ["<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest",
    "^.+\\.css$": "<rootDir>/src/tests/cssTransform.js",
    "^.+\\.scss$": "jest-scss-transform",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "<rootDir>/src/tests/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  modulePaths: [],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/tests/__mocks__/fileMock.js",
    uuid: require.resolve("uuid"),
    "\\.(css)$": "<rootDir>/src/tests/__mocks__/styleMock.js",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "@/(.*)$": "<rootDir>/src/$1",
    "@Components/(.*)$": "<rootDir>/src/components/$1",
    "@Modals/(.*)$": "<rootDir>/src/components/modals/$1",
    "@Assets/(.*)$": "<rootDir>/src/assets/$1",
    "@Hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "@Store/(.*)$": "<rootDir>/src/store/$1",
    "@Styles/(.*)$": "<rootDir>/src/styles/$1",
    "@Pages/(.*)$": "<rootDir>/src/pages/$1",
    "@Layouts/(.*)$": "<rootDir>/src/layouts/$1",
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
};
