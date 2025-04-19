import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  prettierConfig,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          tabWidth: 2,
          trailingComma: 'all',
          bracketSpacing: true,
          singleQuote: true,
          semi: true,
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    rules: {
      complexity: ['error', 11],
      camelcase: 'off',
      'class-methods-use-this': 'off',
      'lines-between-class-members': 'off',
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'method',
          format: ['camelCase'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
      ],
      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          tabWidth: 2,
          trailingComma: 'all',
          bracketSpacing: true,
          singleQuote: true,
          semi: true,
        },
      ],
    },
  },
];
