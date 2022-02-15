module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)', '!src/styles/**/*.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
