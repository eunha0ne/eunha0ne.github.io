module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-undef': ['error']
  }
};
