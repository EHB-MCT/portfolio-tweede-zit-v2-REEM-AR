// tests/unit/sample.test.js
const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/questions', () => {
  it('should return an empty array initially', async () => {
    const res = await request(app).get('/api/questions');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });
});
