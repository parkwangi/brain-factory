// @ts-check

import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import commentRules from '../rules/comments.js';

export default [
  comments.recommended,
  {
    rules: {
      ...commentRules.rules,
    },
  },
];
