module.exports = {
    env: {
        browser: true,
        serviceworker: true,
        worker: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'fp/no-delete': 'warn',
    },
};
