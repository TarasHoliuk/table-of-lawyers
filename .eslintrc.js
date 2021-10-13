module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'plugin:react/recommended',
  ],
  rules: {
    // React
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    'react/display-name': 0,
    'jsx-a11y/label-has-associated-control': 0,

    // JavaScript
    semi: 0,
    'no-proto': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'no-case-declarations': 0,
    'padding-line-between-statements': 0,
    'no-param-reassign': 0,
    'no-nested-ternary': 0,
    'max-len': 0,

    // TypeScript
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/semi': ['error'],
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
};
