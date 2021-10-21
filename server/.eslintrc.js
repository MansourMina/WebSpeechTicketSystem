module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': 0,
    'object-curly-newline': 0,
    'no-console': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
  },
};
