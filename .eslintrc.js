module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'google',
        'plugin:vue/vue3-essential'
    ],
    'overrides': [
        {
            'env': {
                'node': true,
            },
            'files': [
                '.eslintrc.{js,cjs}',
            ],
            'parserOptions': {
                'sourceType': 'script',
            },
        },
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'vue',
    ],
    'rules': {
        'semi': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'max-len': ['error', {
            'code': 240
        }],
        'comma-dangle': ['error', 'never'],
        'vue/multi-word-component-names': 'off'
    },
};
