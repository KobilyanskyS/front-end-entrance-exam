import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],

    ignores: [
      "node_modules/**",
      "dist/**",
      ".vite/**",
      "**/vendor/**",
      "**/build/**",
    ],

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
    },

    plugins: {
      js,
    },

    rules: {
      "no-console": "warn",
      "no-debugger": "error",
      "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],

      "eqeqeq": "error",
      "curly": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double", { avoidEscape: true }],
      "indent": ["error", 2, { SwitchCase: 1 }],
      "comma-dangle": ["error", "always-multiline"],
    },

    extends: ["js/recommended"],
  },
]);
