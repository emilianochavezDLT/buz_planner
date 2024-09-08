'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.projects, {
        foreignKey: 'userId', //This is the foreign key column where you want to link the projects table
        as: 'projects' //This is the alias name for the User model to access the projects.
      });

    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
    //can add more fields here with different data types
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};