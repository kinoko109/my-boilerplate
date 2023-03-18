module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "../../configs/eslint/js",
    "../../configs/eslint/jest",
    "../../configs/eslint/import",
    "../../configs/eslint/unicorn",
    "../../configs/eslint/tsdoc",
    "prettier",
  ],
  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/.next/**"],
}
