const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'admin',
    database: process.env.DB_NAME || 'cms',
    dialect: 'mysql',
    logging: true, 
    alter: true,
    pool: {
        max: 10,
        min: 0,
        acquire: 60000, // 60 seconds
        idle: 10000,    // 10 seconds
      },
      dialectOptions: {
        connectTimeout: 60000, // 60 seconds for initial connection timeout
      },
});

sequelize.sync({force: false});
module.exports = sequelize;
