module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-unused-vars': 'error',
    quotes: ['error', 'single'],
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
