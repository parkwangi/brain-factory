// @ts-check

import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import esImport from 'eslint-plugin-import-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactRules from '../rules/react.js';
import jsxA11yRules from '../rules/jsx-a11y.js';

export default tseslint.config(
  jsxA11y.flatConfigs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  {
    files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    rules: {
      ...reactRules.rules,
      ...jsxA11yRules.rules,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  esImport.flatConfigs.react,
);
