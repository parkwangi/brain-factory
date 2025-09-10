// @ts-check

import tseslint from 'typescript-eslint';
import esImport from 'eslint-plugin-import-x';
import globals from 'globals';
import importRules from '../rules/import.js';

export default tseslint.config(
  esImport.flatConfigs.recommended,
  {
    rules: {
      ...importRules.rules,
    },
  },
  {
    files: ['*.config.{js,cjs,mjs,ts,mts,cts}'],
    rules: {
      'import-x/no-default-export': 'off',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/no-named-as-default-member': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);
