import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default tseslint.config(
  { ignores: [ 'dist' ] },
  {
    extends: [ js.configs.recommended, ...tseslint.configs.recommended ],
    files: [ '**/*.{ts,js,tsx,jsx}' ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'off',
      'no-trailing-spaces': 'error',
      indent: [
        'error',
        2
      ],
      semi: [
        'error',
        'always'
      ],
      quotes: [
        'error',
        'single'
      ],
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'array-bracket-spacing': [
        'error',
        'always'
      ],
      'space-in-parens': [
        'error',
        'always'
      ],
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true
        }
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'jsx-quotes': [
        'error',
        'prefer-double'
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never'
        }
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0
        }
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [ '^react$', '^[a-z]', '^@?\\w' ],
            [ '^@/pages', '^@/widgets', '^@/features', '^@/entities', '^@/shared', '^@' ],
            [ '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$' ],
            [ '^.+\\.s?css$' ],
            [ '^\\u0000' ] ]
        }
      ],
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
);
