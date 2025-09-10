/**
 * These are enabled by `import/recommended`, but are better handled by
 * TypeScript and @typescript-eslint.
 */
const disabledRules = {
  'import-x/default': 'off',
  'import-x/export': 'off',
  'import-x/namespace': 'off',
  'import-x/no-unresolved': 'off',
};

/** @type {import('eslint').Linter.HasRules} */
export default {
  rules: {
    ...disabledRules,
  },
};
