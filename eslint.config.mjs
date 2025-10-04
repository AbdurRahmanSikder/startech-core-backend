import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  // 🔹 Global ignores (applies to all configs)
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/*.js", // ignore any .js files in the project
    ],
  },

  // Base ESLint recommended rules
  eslint.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // 🔹 Main TypeScript configuration
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // 🔹 TypeScript strictness
      "@typescript-eslint/no-explicit-any": "error", // ban 'any'
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_", // allow unused args like (_, res)
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      // 🔹 Best practices for backend
      "no-console": ["warn", { allow: ["warn", "error", "info"] }], // allow error logs
      eqeqeq: ["error", "always"], // force ===
      curly: ["error", "all"], // require curly braces
      "no-var": "error", // prefer const/let
      "prefer-const": "error", // use const when possible
      "prefer-template": "error", // use template literals
      "object-shorthand": ["error", "always"], // use { name } not { name: name }

      // 🔹 Function typing
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true, // don't force inline arrow handlers
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "warn",

      // 🔹 Express/Mongoose patterns
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: [
            "req", // Express request
            "res", // Express response
            "next", // Express next
            "acc", // Array.reduce accumulator
            "draft", // Immer draft (if you use it)
          ],
        },
      ],

      // 🔹 Async/Promise best practices
      "@typescript-eslint/no-floating-promises": "error", // must await or handle promises
      "@typescript-eslint/await-thenable": "error", // don't await non-promises
      "@typescript-eslint/no-misused-promises": "error", // don't use promises incorrectly

      // 🔹 Type safety
      "@typescript-eslint/strict-boolean-expressions": [
        "warn",
        {
          allowString: true,
          allowNumber: false,
          allowNullableObject: true,
        },
      ],
    },
  },

  // Disable conflicting rules with Prettier (must be last)
  prettier,
];
