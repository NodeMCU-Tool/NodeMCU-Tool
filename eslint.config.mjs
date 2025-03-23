import globals from 'globals';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
    js.configs.recommended,
    stylistic.configs['recommended'],
    {
        plugins: {
            '@stylistic': stylistic,
        },

        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.node,
            },
        },

        rules: {
            ...js.configs.recommended.rules,

            '@stylistic/indent': ['error', 4],
            '@stylistic/semi': ['warn', 'always'],
            '@stylistic/brace-style': ['error', '1tbs'],
            '@stylistic/arrow-parens': ['warn', 'as-needed'],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
            '@stylistic/operator-linebreak': ['error', 'after'],

            // these rules are disabled intentionally to reduce number of linting errors; all of them can be fixed with --fix option
            '@stylistic/comma-dangle': ['off'],
            '@stylistic/object-curly-spacing': ['off'],
            '@stylistic/space-before-blocks': ['off'],
            '@stylistic/keyword-spacing': ['off'],
            '@stylistic/space-before-function-paren': ['off'],
            '@stylistic/padded-blocks': ['off'],
            '@stylistic/space-infix-ops': ['off'],
            '@stylistic/eol-last': ['off'],
            '@stylistic/no-multiple-empty-lines': ['off'],
            '@stylistic/no-trailing-spaces': ['off'],
            '@stylistic/comma-spacing': ['off'],
            '@stylistic/key-spacing': ['off'],
            '@stylistic/no-multi-spaces': ['off'],
            '@stylistic/spaced-comment': ['off'],
            // end of disabled rules

            // eslint-config-aenondynamics rules:

            // Possible Errors
            'no-await-in-loop': 1,

            // Best Practices
            'block-scoped-var': 2,
            'class-methods-use-this': 2,
            'default-case': 2,
            'no-alert': 2,
            'no-caller': 2,
            'no-eval': 2,
            'no-extend-native': 2,
            'no-floating-decimal': 2,
            'no-implicit-globals': 2,
            'no-implied-eval': 2,
            'no-invalid-this': 2,
            'no-iterator': 2,
            'no-labels': 2,
            'no-lone-blocks': 2,
            'no-loop-func': 2,
            'no-new': 2,
            'no-new-func': 2,
            'no-new-wrappers': 2,
            'no-param-reassign': 1,
            'no-proto': 2,
            'no-return-assign': 2,
            'no-self-compare': 2,
            'no-sequences': 2,
            'no-throw-literal': 2,
            'no-unmodified-loop-condition': 2,
            'no-unused-expressions': 2,
            'no-useless-call': 2,
            'no-useless-concat': 1,
            'no-useless-escape': 1,
            'no-useless-return': 2,
            'no-void': 2,
            'no-with': 2,
            'prefer-promise-reject-errors': 2,
            'require-await': 2,
            'vars-on-top': 2,
            'wrap-iife': [2, 'outside'],
            'yoda': 2,

            // Node.js and CommonJS
            'no-sync': 2,
            'global-require': 2,
            'handle-callback-err': 2,
            'no-path-concat': 2,
            'no-process-exit': 2,
            'no-new-require': 2,
            'no-mixed-requires': 2,

            // Variables
            'no-use-before-define': 2,
            'no-shadow': 2,
            'no-shadow-restricted-names': 2,
            'no-undefined': 2,

            // ECMAScript 6
            'no-confusing-arrow': 2,
            'no-var': 2,
            'prefer-const': 2,
            'prefer-rest-params': 2,
            'rest-spread-spacing': [2, 'never'],
        },
    },

    {
        files: ['*.mjs'],
        languageOptions: {
            sourceType: 'module',
        },
    },
];
