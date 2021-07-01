module.exports = {
  extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    // Disable prop-types as we use TypeScript for type checking
    'react/prop-types': 'off',
    // Disable unescaped entities checking
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Enable prettier rules
    'prettier/prettier': 'error',
    // interface start with capital I
    '@typescript-eslint/interface-name-prefix': 'off',
    // allow "any" as type
    '@typescript-eslint/no-explicit-any': 'off',
    // allow @ts-ignore for testing purposes
    '@typescript-eslint/ban-ts-ignore': 'off',
  },
}
