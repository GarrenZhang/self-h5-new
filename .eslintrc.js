module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue-libs/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/max-attributes-per-line': [2, {
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [1, 'never'],
    'quotes': [1, 'single'],
    'space-before-function-paren': [1, 'always'],
    'no-var': 2,
    'accessor-pairs': 2
  }
}
