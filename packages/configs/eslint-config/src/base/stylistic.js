// @ts-check

import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import stylisticRules from '../rules/stylistic.js';

export default tseslint.config({
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    ...stylisticRules.rules,
  },
});
