// @ts-check

import path from 'node:path';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { createNodeResolver } from 'eslint-plugin-import-x';
import { includeIgnoreFile } from '@eslint/compat';
import bestPracticeRules from '../rules/best-practice.js';
import es6Rules from '../rules/es6.js';
import possibleErrorsRules from '../rules/possible-errors.js';
import variablesRules from '../rules/variables.js';
import comments from './comments.js';
import esImport from './import.js';
import unicorn from './unicorn.js';
import stylistic from './stylistic.js';

export default tseslint.config(
  includeIgnoreFile(
    path.join(import.meta.dirname, '../../../../../.gitignore'),
  ),
  { ignores: ['**/*.config.*'] },
  eslint.configs.recommended,
  comments,
  esImport,
  unicorn,
  stylistic,
  {
    rules: {
      ...bestPracticeRules.rules,
      ...es6Rules.rules,
      ...possibleErrorsRules.rules,
      ...variablesRules.rules,
      // Boolean() cannot be used to perform a null check
      // see also: https://github.com/microsoft/TypeScript/issues/16655
      'no-implicit-coercion': [
        'warn',
        {
          allow: ['!!'],
        },
      ],
      'no-nested-ternary': 'off',
    },
    settings: {
      'import-x/resolver-next': [createNodeResolver()],
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
);
