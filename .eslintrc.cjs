module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', '@emotion'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'prefer-regex-literals': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/require-default-props': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@emotion/jsx-import': 'error',
    '@emotion/pkg-renaming': 'error',
  },
};
