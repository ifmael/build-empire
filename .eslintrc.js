module.exports = {
    plugins: [
      'ember'
    ],
    extends: [
      'eslint:recommended',
      'plugin:ember/recommended' // or 'plugin:ember/base'
    ],
    rules: {
      // override rules' settings here
    },
    parserOptions: {
      'ecmaVersion': 2017
    }
  }
