module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier'

  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    "no-debugger": 0,
    "semi": "error",
    "prefer-destructuring": "error",
    "max-len": [
      "warn",
      {
        "code": 120,
        "ignoreUrls": true,
        "ignorePattern": "import"
      }
    ],
    "no-unused-vars": "warn",
    "operator-linebreak": "warn",
    "react-hooks/rules-of-hooks": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-param-reassign": ["error", {
      "props": true,
      "ignorePropertyModificationsFor": [
        "state"
      ]
    }],
    "react/jsx-closing-tag-location": 2,
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-filename-extension": [2, { "extensions": [".tsx", ".ts"] }],
    "comma-dangle": [2, "always-multiline"],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "react/jsx-fragments": [1, "element"],
    "react/function-component-definition": [2, {"namedComponents": "function-declaration"}],
    "import/prefer-default-export": "off"
  },
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
