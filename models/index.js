const { Sequelize } = require('sequelize');
const config = require('../config/config');

//Connect to the database
const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect
});

async function connectToDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
  
//Connect to the database
connectToDatabase();

//Initialize the database
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.User = require('./user')(sequelize, Sequelize);
db.Project = require('./project_model')(sequelize, Sequelize);

module.exports = db;
module.exports = sequelize;