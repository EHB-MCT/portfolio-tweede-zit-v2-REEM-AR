const app = require('./app');
const sequelize = require('./config/db');

// Sync the database and then start the server
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
});
