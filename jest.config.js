module.exports = {
  testEnvironment: 'jsdom', // Simulates a browser-like environment
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel for transforming files
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Setup file for testing-library
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // Mock CSS/SCSS imports
    '\\.(png|jpe?g|gif|svg|pdf)$': '<rootDir>/__mocks__/fileMock.js', // Mock static assets
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Support for TypeScript
};