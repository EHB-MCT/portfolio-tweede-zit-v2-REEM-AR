// src/server.js
const app = require('./app');
const sequelize = require('./config/db');

sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
    app.listen(5000, () => {
        console.log('Server running on port 5000');
    });
});
