// @ts-check

import tseslint from 'typescript-eslint';
import next from '@next/eslint-plugin-next';

export default tseslint.config({
  plugins: {
    '@next/next': next,
  },
  rules: {
    ...next.configs.recommended.rules,
    ...next.configs['core-web-vitals'].rules,
  },
});
