module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['server.js', 'views/**/*.hbs', 'scripts/**/*.js'],
  coverageThreshold: {
    global: {
      lines: 0,
      statements: 0,
      branches: 0,
      functions: 0
    }
  }
};
