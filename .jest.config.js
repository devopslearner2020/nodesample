module.exports = {
  rootDir: '../HelloAppSVC/',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: [
    '!index.js',
    '**/*.js',
    '!.jest.config.js',
    '!.eslintrc.js'
  ],

  // Fail if there is less than 20% branch, line, and function coverage,
  // or if there are more than 20 uncovered statements:

  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js'],
  setupTestFrameworkScriptFile: 'jest-extended'
};
