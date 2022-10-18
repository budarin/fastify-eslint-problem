module.exports = {
    root: true,
    env: {
        node: true,
        es2022: true,
        commonjs: true,
        'jest/globals': true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
        ecmaVersion: 'latest',
        tsconfigRootDir: '.',
        project: 'tsconfig.json',
        createDefaultProgram: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:security/recommended',
    ],
    plugins: ['jest', 'fp', 'deprecate', 'promise', 'security'],
    // sample rules https://gist.github.com/BoresXP/e404f16a0e153eeb6ce15ce06848f36e
    rules: {
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',

        // disable the rule for all files to enable it only for ts
        '@typescript-eslint/explicit-function-return-type': 'off',

        '@typescript-eslint/no-invalid-this': 'warn',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow',
            },
        ],

        complexity: ['warn', 5],
        'max-lines': [
            'warn',
            {
                max: 200,
                skipBlankLines: true,
            },
        ],
        'max-depth': ['warn', 3],
        'max-nested-callbacks': ['warn', 3],
        'max-lines-per-function': [
            'warn',
            {
                max: 100,
                skipBlankLines: true,
            },
        ],
        'no-param-reassign': 'warn',
        'max-params': ['warn', 3],
        'fp/no-let': 'off',
        'fp/no-throw': 'off',
        'fp/no-mutating-assign': 'warn',
        'fp/no-mutating-methods': 'warn',
        'fp/no-mutation': 'off',
        'deprecate/function': [
            'warn',
            {
                name: 'legacyFunc',
                use: 'newFunc from this package',
            },
        ],
        'no-native-reassign': [
            'error',
            {
                exceptions: ['Redis.Promise'],
            },
        ],
        'security/detect-object-injection': 'off',
        'require-await': 'off',
        'no-invalid-this': 'off',
        'fp/no-loops': 'off',
    },

    overrides: [
        {
            // enable the rule specifically for TypeScript files
            files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'error',
            },
        },
    ],
};
