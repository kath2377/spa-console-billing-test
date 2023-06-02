module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["../node_modules/(?!@kushki)"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(png)$": "identity-obj-proxy",
    "\\.(svg)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: [
    "../node_modules/@testing-library/jest-dom/dist/index.js",
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 94,
      lines: 94,
      statements: 94,
    },
  },
  coverageDirectory: "../coverage",
  collectCoverageFrom: ["./**/*.{ts,tsx}"],
  setupFiles: ["../jest.global.jsx"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/theme.ts",
    "src/set-public-path.tsx",
    "src/root.component.tsx",
    "src/navigation.component.tsx",
    "src/kushki-spa-console-billing.tsx",
    "src/environments",
    "src/schema",
    "src/shared",
    "src/assets",
    "src/store/actions",
    "src/store/utils/store-utils.ts",
    "src/store/hooks/storeHook.ts",
    ".interfaces.ts",
    ".styles.ts",
    ".d.ts",
  ],
};
