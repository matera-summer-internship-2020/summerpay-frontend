module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jsdoc',
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-react',
    'unused-imports',
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/no-unresolved": [
      2, 
      { "caseSensitive": false }
    ],
    "import/extensions": ["warn", "always", { "ts": "never", "tsx": "never" }],
    "no-use-before-define": "off",
    'max-len': [
      'warn',
      {
        code: 120
      }
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        },
        groups: ['internal', 'builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always-and-inside-groups'
      }
    ],
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
