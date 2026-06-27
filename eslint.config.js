import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
  globalIgnores([
    'dist',
    'build',
    'public',
    '.vscode',
    '.idea',
    'coverage',
    'node_modules',
    '*.min.js',
  ]),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    extends: [
      js.configs.recommended,
      tsEslint.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      jsxA11y.flatConfigs.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json'],
        },
      },
    },
    rules: {
      'no-var': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'none',
          ignoreRestSiblings: false,
          ignoreUsingDeclarations: false,
          reportUsedIgnorePattern: false,
        },
      ],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: false,
          enforceForJSX: false,
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: true,
          classes: true,
          variables: true,
        },
      ],
      'no-multi-assign': 'error',
      'no-undef-init': 'error',
      'no-self-compare': 'error',
      'one-var': ['error', 'never'],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
        },
      ],
      'no-array-constructor': 'error',
      'array-callback-return': 'error',
      'no-useless-computed-key': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'new-cap': 'error',
      'class-methods-use-this': [
        'error',
        {
          exceptMethods: ['render'],
        },
      ],
      'no-useless-constructor': 'error',
      'dot-notation': 'error',
      'func-style': ['error', 'expression'],
      'default-param-last': ['error'],
      'max-params': [
        'error',
        {
          max: 3,
        },
      ],
      'no-loop-func': 'error',
      'no-await-in-loop': 'error',
      'require-atomic-updates': 'error',
      'max-nested-callbacks': ['error', 3],
      'no-new-func': 'error',
      'no-return-assign': 'error',
      'no-lone-blocks': 'error',
      'no-iterator': 'error',
      'no-param-reassign': [
        'error',
        {
          props: true,
        },
      ],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-arrow-callback': 'error',
      'require-await': 'error',
      'id-length': [
        'error',
        {
          min: 2,
          exceptions: ['i', 'e', 't'],
        },
      ],
      'no-duplicate-imports': 'error',
      camelcase: 'error',
      'prefer-template': 'error',
      'no-useless-concat': 'error',
      eqeqeq: 'error',
      'no-eval': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'warn',
      'no-else-return': [
        'warn',
        {
          allowElseIf: false,
        },
      ],
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-alert': 'error',
      'no-unreachable': 'error',
      'no-empty': 'error',
      'no-prototype-builtins': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 0,
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'import/first': 'error',
      'import/exports-last': 'error',
      'import/newline-after-import': 'error',
      'import/no-namespace': 'error',
      'import/no-named-default': 'error',
      'import/no-anonymous-default-export': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/no-mutable-exports': 'error',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
    },
  },
]);
