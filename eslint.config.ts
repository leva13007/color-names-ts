import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "dist/",
      "node_modules/",
      "coverage/",
      "imports/",
      "temp/",
      "*.config.js",
      "*.cjs",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      indent: ["error", 2],
      "semi": [1, "always"],
      "no-unused-vars": "error",
      "no-console": "error",
      "spaced-comment": ["error", "always", { markers: ["/"] }],
    },
  },
  tseslint.configs.recommended,
]);
