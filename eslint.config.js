import eslint from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules,
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    ...eslint.configs.recommended
  }
];