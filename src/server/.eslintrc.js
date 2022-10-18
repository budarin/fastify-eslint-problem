module.exports = {
    env: {
        node: true,
        worker: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        node: {
            resolvePaths: [__dirname],
            tryExtensions: ['ts', 'tsx', '.js', '.json', '.node'],
        },
    },
    extends: ['plugin:node/recommended'],
    rules: {
        'node/no-unsupported-features/node-builtins': [
            'error',
            {
                ignores: ['perf_hooks'],
            },
        ],
        // node rules
        'node/no-unsupported-features/es-builtins': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-missing-import': 'off',
        'node/no-unpublished-import': 'off',
        'no-process-exit': 'off',
        'fp/no-delete': 'off',
        'fp/no-mutating-methods': 'off',
    },
};
