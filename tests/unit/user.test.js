const { Sequelize } = require('sequelize');
const User = require('../../src/models/User');
const sequelize = require('../../src/config/db');

beforeAll(async () => {
  await sequelize.sync({ force: true });  // Ensure database is in sync
});

describe('User Model', () => {
  it('should create a new user', async () => {
    const user = new User({ name: 'John Doe', email: 'john@example.com', password: 'password' });
    const savedUser = await user.save();
    expect(savedUser.name).toBe('John Doe');
  });
});
