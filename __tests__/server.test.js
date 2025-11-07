const request = require('supertest');
const { app } = require('../server');

describe('Portfolio server', () => {
  it('serves the home page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hi, I am');
  });

  it('serves the projects page', async () => {
    const res = await request(app).get('/projects');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Highlighted Projects');
  });

  it('returns a 404 for unknown routes', async () => {
    const res = await request(app).get('/unknown-page');
    expect(res.statusCode).toBe(404);
    expect(res.text).toContain('Return home');
  });
});
