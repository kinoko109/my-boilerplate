const { OFF, ERROR, WARN } = require("../const")
const { sortKeys } = require("./rules/sort-keys")

module.exports = {
  rules: {
    "max-depth": [WARN, 3],
    "max-lines": [WARN, { max: 100 }],
    "max-nested-callbacks": [WARN, 3],
    "max-statements": [WARN, 10],
    "multiline-comment-style": OFF,
    "no-magic-numbers": WARN,
    "no-undefined": WARN,
    "no-unused-vars": OFF,
    "no-use-before-define": OFF,
    "sort-keys": sortKeys,
    complexity: [ERROR, 5],
  },
  overrides: [
    {
      files: ["**/*.{test}.{ts,tsx}"],
      rules: Object.fromEntries(
        [
          "complexity",
          "max-lines",
          "max-nested-callbacks",
          "max-statements",
          "no-console",
          "no-magic-numbers",
          "no-undefined",
          "sort-keys",
        ].map((rule) => [rule, OFF]),
      ),
    },
  ],
}
