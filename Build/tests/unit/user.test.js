const User = require('../../src/models/User');

describe('User Model', () => {
  it('should create a new user', async () => {
    const user = new User({ name: 'John Doe', email: 'john@example.com', password: 'password' });
    const savedUser = await user.save();
    expect(savedUser.name).toBe('John Doe');
  });
});
