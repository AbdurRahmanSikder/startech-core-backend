import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
  // Base ESLint recommended rules
  eslint.configs.recommended,
  // TypeScript recommended rules
  ...tseslint.configs.recommended,
  // Disable conflicting rules with Prettier
  prettier,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json"
      }
    },
    rules: {
      // 🔹 TypeScript strictness
      "@typescript-eslint/no-explicit-any": "error", // ban 'any'
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" } // allow unused args like (_, res)
      ],
      "@typescript-eslint/consistent-type-imports": "error", // enforce `import type`
      
      // 🔹 Best practices for backend
      "no-console": "warn", // warn if console.log is left
      "eqeqeq": ["error", "always"], // force ===
      "curly": "error", // require curly braces
      "no-var": "error", // prefer const/let

      // 🔹 Function typing
      // Require explicit return types only for exported functions (services/controllers)
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true, // don’t force inline arrow handlers
          allowConciseArrowFunctionExpressionsStartingWithVoid: true
        }
      ],
      "ignorePatterns": ["*.js"],
      // Require typing on exported functions & module boundaries
      "@typescript-eslint/explicit-module-boundary-types": "warn"
    }
  }
];
