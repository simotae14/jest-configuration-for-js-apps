module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // add emotion as snapshot Serializer
  snapshotSerializers: ['jest-emotion'],
  // add a coverage threshold
  coverageThreshold: {
    global: {
      statements: 31,
      branches: 18,
      lines: 29,
      functions: 29
    },
    // specific coverage threshold
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      lines: 100,
      functions: 100
    }
  }
}