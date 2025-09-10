// @ts-check

import tseslint from 'typescript-eslint';
import tsdoc from 'eslint-plugin-tsdoc';
import tsdocRules from '../rules/tsdoc.js';

export default tseslint.config({
  plugins: {
    tsdoc,
  },
  rules: {
    ...tsdocRules.rules,
  },
});
