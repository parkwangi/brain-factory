/** @type {import('eslint').Linter.HasRules} */
export default {
  rules: {
    /**
     * Require TSDoc comments conform to the TSDoc specification.
     *
     * 🚫 Not fixable - https://github.com/microsoft/tsdoc/tree/master/eslint-plugin
     */
    'tsdoc/syntax': 'error',
  },
};
