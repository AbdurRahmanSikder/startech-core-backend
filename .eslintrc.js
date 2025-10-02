module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    node: true,
    es2021: true,
    jest: true, // if using Jest
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // enables eslint-plugin-prettier + displays prettier errors
  ],
  rules: {
    // Core best practices
    "no-console": "warn",
    "eqeqeq": ["error", "always"],
    "curly": ["error", "all"],

    // TypeScript rules
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
    ],
    "@typescript-eslint/explicit-function-return-type": "off", // optional
    "@typescript-eslint/no-explicit-any": "warn", // avoid too much "any"

    // Formatting rules (handled by Prettier)
    "prettier/prettier": "error",
  },
};
