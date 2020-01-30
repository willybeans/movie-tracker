module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react-hooks"
  ],
  rules: {
    "max-len": 0,
    "no-underscore-dangle": 1,
    "no-use-before-define": 0,
    "object-curly-newline": [2, { "ImportDeclaration": "never" }],
    "no-param-reassign": ["error", { "props": false }],
    "react/no-unescaped-entities": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  "globals": {
    "document": true,
    "window": true,
    "navigator": true,
  }
};
