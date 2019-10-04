module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es6: true,
        node: true,
        'jest/globals': true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier',
        'prettier/react',
        'plugin:prettier/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'jest'],
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['components', './src/components'],
                    ['containers', './src/containers'],
                    ['actions', './src/actions'],
                    ['reducers', './src/reducers'],
                    ['constants.ts', './src/constants.ts'],
                    ['selectors', './src/selectors'],
                    ['types', './src/types'],
                    ['utils', './src/utils'],
                    ['lib', './src/lib'],
                    ['src', './src'],
                    ['sagas', './src/sagas'],
                    ['services', './src/services']
                ],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
            }
        }
    },
    rules: {
        'arrow-parens': 0,
        'no-param-reassign': 1,
        'implicit-arrow-linebreak': 1,
        'no-use-before-define': 0,
        'linebreak-style': 0,
        'prettier/prettier': 2,
        quotes: [2, 'single'],
        'prettier/prettier': [2, { singleQuote: true }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'import/prefer-default-export': 0,
        'react/require-default-props': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
        ]
    }
};
