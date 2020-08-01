module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'prettier',
    '@vincent0119/standard',
    '@vincent0119/vue',
    '@vue/prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/attribute-hyphenation': 'off',
  },
};
