const request = require('supertest');
const app = require('../../src/app'); 
const sequelize = require('../../src/config/db'); 

beforeAll(async () => {
  await sequelize.sync({ force: true });
  // Create a question to test comments on
  await request(app)
    .post('/api/questions')
    .send({
      title: 'How do I use Sequelize?',
      body: 'I need help understanding how to use Sequelize in a Node.js application.',
    });
});

describe('Comments API', () => {
  it('should create a new comment', async () => {
    const res = await request(app)
      .post('/api/questions/1/comments')
      .send({
        body: 'You can use Sequelize by following their official documentation.',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should fetch all comments for a specific question', async () => {
    const res = await request(app).get('/api/questions/1/comments');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
