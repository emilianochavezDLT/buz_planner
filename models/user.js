//Model for the user
const { Sequelize, DataTypes } = 'sequelize';
//The user will contain the following fields
/**
 * ID
 * First Name
 * Last Name
 * Email
 * Password
 * Time Created
 * Last Login
 * 
 */


const User = (sequelize) => {
    return sequelize.define('User', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        lastLogin: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        // Other model options go here
    });
}

module.exports = User;


