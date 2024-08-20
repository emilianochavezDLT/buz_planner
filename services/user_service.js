const { User } = require('../models'); // Import the User model


//Create a new user
const createUser = async (user) => { 
    try {
        const newUser = await User.create(user); // Create a new user
        return newUser; // Return the new user

    } catch (error) {
        throw new Error(error, "Could not create user");
    }
}

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id); //Find a user by ID
        return user;

    } catch (error) {
        throw new Error(error, "Could not find user");
    }
}



module.exports = {
    createUser,
    getUserById,
}