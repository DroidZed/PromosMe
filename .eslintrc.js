// Sample .eslintrc.js
module.exports = {
  parser: 'esprima', //default parser
  parserOptions: {
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['react', 'prettier'],
  extends: ['prettier', 'react-app', '@react-native-community'],
  rules: {
    'no-unreachable': 'error',
    'no-console': 'error',
  },
};