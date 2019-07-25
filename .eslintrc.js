module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:react-native/all'],
  plugins: ['react-native', 'jsx-a11y', 'import'],
  env: {
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    /* This settings only if using babel-plugin-root-import and eslint-import-resolver-babel-plugin-root-import*/
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
};
