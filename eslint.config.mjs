// @ts-check
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tsEslint from 'typescript-eslint';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tsEslint.config(
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.strictTypeChecked,
      ...tsEslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    extends: [tsEslint.configs.disableTypeChecked],
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  { ignores: ['build/'] },
);
