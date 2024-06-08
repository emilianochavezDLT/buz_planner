const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

/**
 * 
 * The project will contain the following fields
 * 
 * ID
 * Name of the project
 * Time created
 * Created by (User)
 * 
 * 
 */


const Project = sequelize.define('Project', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    createdBy: {
        type: DataTypes.INTEGER,
        refernces: {
            model: 'User',
            key: 'id'
        }
    }
}, {
    // Other model options go here
});

module.exports = Project;