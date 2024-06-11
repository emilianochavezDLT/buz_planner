const { Sequelize } = require('sequelize');
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

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        // Other model options go here
    });

    return Project;
}