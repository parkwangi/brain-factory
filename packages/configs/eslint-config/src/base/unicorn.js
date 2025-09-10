// @ts-check

import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import unicornRules from '../rules/unicorn.js';

export default tseslint.config({
  plugins: {
    unicorn,
  },
  rules: {
    ...unicornRules.rules,
  },
});
