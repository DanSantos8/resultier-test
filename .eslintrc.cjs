module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      "presets": ["@babel/preset-react"]
    },
    ecmaVersion: 2018,
    sourceType: "module",
    requireConfigFile: false,
  },
  plugins: [
    "import"
  ],
  root: true,
  rules: {
    indent: [
      "error",
      2
    ],
    quotes: [
      "warn",
      "double"
    ],
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc"
        },
        groups: [
          "builtin",
          "external",
          "index",
          "sibling",
          "parent",
          "internal"
        ]
      }
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}