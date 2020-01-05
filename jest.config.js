module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['**/src/**/*.js'],
  // add a coverage threshold
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 18,
      lines: 29,
      functions: 28
    },
    // specific coverage threshold
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      lines: 100,
      functions: 100
    }
  },
  projects: ['./test/jest.lint.js', './test/jest.client.js', './test/jest.server.js'],
}