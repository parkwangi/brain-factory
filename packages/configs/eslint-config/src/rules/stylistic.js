/** @type {import('eslint').Linter.HasRules} */
export default {
  rules: {
    /**
     * Disallow floating decimal
     *
     * 🔧 Fixable - https://eslint.style/rules/js/no-floating-decimal
     */
    '@stylistic/no-floating-decimal': 'error',
    /**
     * Disallow the omission of parentheses when invoking a constructor with
     * no arguments.
     *
     * 🔧 Fixable - https://eslint.style/rules/js/new-parens
     */
    '@stylistic/new-parens': 'warn',
    /**
     * Require camel case names.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/camelcase
     */
    camelcase: [
      'error',
      { allow: ['^UNSAFE_'], ignoreDestructuring: false, properties: 'never' },
    ],
    /**
     * Require function expressions to have a name.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/func-names
     */
    'func-names': ['error', 'as-needed'],
    /**
     * Require a capital letter for constructors.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/new-cap
     */
    'new-cap': ['error', { capIsNew: false }],
    /**
     * Disallow use of the Array constructor.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': 'error',
    /**
     * Disallow use of bitwise operators.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-bitwise
     */
    'no-bitwise': 'error',
    /**
     * Disallow if as the only statement in an else block.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-lonely-if
     */
    'no-lonely-if': 'warn',
    /**
     * Disallow use of chained assignment expressions.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': ['error'],
    /**
     * Disallow nested ternary expressions.
     *
     * 🚫 Not fixable - https://eslint.org/docs/rules/no-nested-ternary
     */
    'no-nested-ternary': 'error',
    /**
     * Disallow ternary operators when simpler alternatives exist.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'error',
    /**
     * Require use of an object spread over Object.assign.
     *
     * 🔧 Fixable - https://eslint.org/docs/rules/prefer-object-spread
     */
    'prefer-object-spread': 'warn',
  },
};
