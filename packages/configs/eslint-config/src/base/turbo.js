// @ts-check

import turbo from 'eslint-config-turbo/flat';
import tseslint from 'typescript-eslint';

export default tseslint.config(turbo, {
  files: ['turbo/**/*'],
  rules: {
    'import-x/no-default-export': 'off',
    'import-x/no-extraneous-dependencies': 'off',
  },
});
