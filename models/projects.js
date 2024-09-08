'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      projects.belongsTo(models.User, {
        foreignKey: 'userId', //This is the foreign key column where you want to link the projects table
        as: 'user' //This is the alias name for the User model.

      });
    }
  }
  projects.init({
    projectName: DataTypes.STRING,
    projectDescription: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'projects',
  });
  return projects;
};