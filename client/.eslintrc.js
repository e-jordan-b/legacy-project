module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'xo',
  ],
  overrides: [
    {
      extends: [
        'xo-typescript',
      ],
      files: [
        '*.ts',
        '*.tsx',
        '*.json',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: ['error', 2],
    'no-empty-function': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
  },
};
