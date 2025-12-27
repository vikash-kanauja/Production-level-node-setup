// eslint.config.js
import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig([

  // 🔹 TypeScript rules WITH type checking (STRICT)
  {
    files: ["**/*.ts"],
    ignores: ["dist/**","node_modules/**",
    "commitlint.config.js"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    rules: {
      "no-console": "error",
      quotes: ["error", "single", { allowTemplateLiterals: true }],
    },
  },
]);
