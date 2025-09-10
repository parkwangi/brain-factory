// @ts-check

import tailwind from 'eslint-plugin-better-tailwindcss';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  plugins: {
    'better-tailwindcss': tailwind,
  },
  rules: {
    ...tailwind.configs['recommended-warn'].rules,
    ...tailwind.configs['recommended-error'].rules,
    'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
    'better-tailwindcss/no-unregistered-classes': [
      'error',
      { ignore: ['scrollable', 'toaster'] },
    ],
  },
});
