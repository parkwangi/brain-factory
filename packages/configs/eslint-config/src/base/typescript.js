// @ts-check

import { resolve } from 'node:path';
import esImport from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import tseslint from 'typescript-eslint';
import tsRules from '../rules/typescript/index.js';
import tsExtensionRules from '../rules/typescript/extension.js';
import tsImportRules from '../rules/typescript/import.js';
import tsdoc from './tsdoc.js';

const projectRoot = process.cwd();
const project = resolve(projectRoot, 'tsconfig.json');

export default tseslint.config(
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  esImport.flatConfigs.typescript,
  tsdoc,
  {
    settings: {
      'import-x/resolver-next': [
        esImport.createNodeResolver(),
        createTypeScriptImportResolver({
          project,
        }),
      ],
    },
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.config.{js,mjs,cjs,ts,mts,cts}'],
        },
        tsconfigRootDir: projectRoot,
      },
    },
    rules: {
      ...tsRules.rules,
      ...tsExtensionRules.rules,
      ...tsImportRules.rules,
      '@typescript-eslint/restrict-template-expressions': [
        'warn',
        // default values are from `typescript-eslint`
        // https://typescript-eslint.io/rules/restrict-template-expressions/#options
        {
          allow: [{ name: ['Error', 'URL', 'URLSearchParams'], from: 'lib' }],
          allowAny: true,
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: true,
        },
      ],
      '@typescript-eslint/no-base-to-string': [
        'error',
        {
          // default values are from `typescript-eslint`
          // https://typescript-eslint.io/rules/no-base-to-string/#options
          ignoredTypeNames: [
            'Error',
            'RegExp',
            'URL',
            'URLSearchParams',
            'FormDataEntryValue',
          ],
        },
      ],
      '@typescript-eslint/no-misused-promises': [
        'warn',
        { checksVoidReturn: false },
      ],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
);
