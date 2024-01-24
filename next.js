module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "import-helpers"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "import/no-duplicates": ["error", { "prefer-inline": true }],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always", // new line between groups
        groups: ["/^react/", "module", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
};
