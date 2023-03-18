const { OFF, ERROR } = require("../const")
const { extensions } = require("./rules/extensions")
const { order } = require("./rules/order")

module.exports = {
  rules: {
    "import/prefer-default-export": OFF,
    "import/no-default-export": ERROR,
    "import/order": order,
    "import/extensions": extensions,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.{test}.{ts,tsx}"],
      rules: Object.fromEntries(
        [
          // OFF にするルールを追加していく
          "import/no-extraneous-dependencies",
        ].map((rule) => [rule, OFF]),
      ),
    },
    {
      files: [
        "**/pages/**/*.{api,page,mock}.{tsx,ts}",
        "**/*.stories.{ts,tsx}",
      ],
      rules: Object.fromEntries(
        [
          // OFF にするルールを追加していく
          "import/no-default-export",
        ].map((rule) => [rule, OFF]),
      ),
    },
  ],
}
