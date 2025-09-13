// ESLint v9 Flat Config (CommonJS)
const tsParser = require('@typescript-eslint/parser');
const tseslint = require('@typescript-eslint/eslint-plugin');

module.exports = [
  // Ignores (migrated from .eslintignore)
  {
    ignores: ['node_modules', 'lib', 'coverage'],
  },
  // TypeScript and JavaScript files
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Keep previous behavior
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
