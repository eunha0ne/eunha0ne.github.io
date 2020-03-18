module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true
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
  plugins: ['react'],
  rules: {
    'no-undef': ['error', { typeof: true }]
  }
};
