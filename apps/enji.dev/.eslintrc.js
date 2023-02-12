/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['next-typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'vars-on-top': 'off',
    'no-var': 'off',
  },
};
