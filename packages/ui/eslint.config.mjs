// @ts-check

import react from '@repo/eslint-config/react';
import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  react,
  storybook.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.lint.json',
        projectService: false,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'react/button-has-type': 'off',
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['cmdk-input-wrapper'],
        },
      ],
    },
  },
  {
    files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['**/*.stories.{jsx,tsx}', '.storybook/*.ts'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  {
    settings: {
      'better-tailwindcss': {
        entryPoint: './.storybook/style.css',
      },
    },
  },
);
