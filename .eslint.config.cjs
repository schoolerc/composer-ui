import stylisticTs from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'
import reactRefresh from 'react-refresh'

module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslint.config.cjs'],
    parser: parserTs,
    plugins: { 'react-refresh': reactRefresh, '@stylistic/ts': stylisticTs},
    rules: {
        'react-refresh/only-export-components': [
            'error',
            {allowConstantExport: true},
        ],
        '@stylistic/indent': ['error', 2],
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/comma-dangle': ['error', 'always']
    },
}
