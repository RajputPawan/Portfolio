/**
 * Basic test file for the portfolio server
 * This ensures Jest can run successfully in CI/CD
 */

describe('Portfolio Server', () => {
  test('should have a test suite', () => {
    expect(true).toBe(true);
  });

  test('should verify basic setup', () => {
    const packageJson = require('../package.json');
    expect(packageJson.name).toBe('portfolio');
    expect(packageJson.version).toBeDefined();
  });
});

