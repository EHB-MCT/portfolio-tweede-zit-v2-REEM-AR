const request = require('supertest');
const app = require('../../src/app'); 
const sequelize = require('../../src/config/db'); 

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Questions API', () => {
  it('should create a new question', async () => {
    const res = await request(app)
      .post('/api/questions')
      .send({
        title: 'How do I use Sequelize?',
        body: 'I need help understanding how to use Sequelize in a Node.js application.',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should fetch all questions', async () => {
    const res = await request(app).get('/api/questions');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should fetch a specific question by ID', async () => {
    const res = await request(app).get('/api/questions/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should delete a question', async () => {
    const res = await request(app).delete('/api/questions/1');
    expect(res.statusCode).toEqual(204);
  });
});
