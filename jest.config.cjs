module.exports = {
    testEnvironment: 'jsdom',
    // Utilise les builds CommonJS des dépendances (react-router, lucide-react...)
    testEnvironmentOptions: { customExportConditions: ['node', 'require', 'default'] },
    setupFilesAfterEnv: ['<rootDir>/tests/support/setup.js'],
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
        '\\.(jpe?g|png|gif|webp|svg)$': '<rootDir>/tests/support/fileTransform.cjs',
    },
    moduleNameMapper: {
        '\\.css$': '<rootDir>/tests/support/styleMock.cjs',
    },
};
