module.exports = {
  extends: ["airbnb", "airbnb/hooks"],
  plugins: ["react", "react-native"],
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    quotes: ["error", "double"],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    "global-require": "off",
    "camelcase": "off",
    "arrow-body-style": "off",
    "react/no-array-index-key": "off",
    "no-use-before-define": "off",
    "object-curly-newline": ["error", {
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    }],
    "react/jsx-props-no-spreading": "off",
    'react/forbid-prop-types': ['error', {
      forbid: ['any'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    "react/require-default-props": "off",
    "react/prop-types": ["error", { "ignore": ["navigation", "children", "client"] }]
  }
};
