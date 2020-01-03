const path = require('path');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules', 
    path.join(__dirname, 'src'), 
    'shared', 
    path.join(__dirname, 'src'), 
    'test'
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // add emotion as snapshot Serializer
  snapshotSerializers: ['jest-emotion'],
  // set the coverage path to select
  collectCoverageFrom: ['**/src/**/*.js'],
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