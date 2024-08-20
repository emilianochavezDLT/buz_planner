const userService = require('../services/user_service');

const createUser = async (req, res) => {
    try {
        const user = req.body; // Get the user object from the request body
        const newUser = await userService.createUser(user); // Create a new user from the imported service function
        res.status(201).json(newUser); // Return the new user
    } catch (error) {
        res
            .status(400)
            .json({ error: error.message });
    }
}

const signIn = async (req, res) => {
    try {
        const user = req.body; // Get the user object from the request body
        const userFound = await userService.findUser(user); // Find the user from the imported service function
        if (userFound) {
            res.status(200).json(userFound); // Return the user
        } else {
            res.status(400).json({ error: "User not found" }); // Return an error if the user is not found
        }
        
    } catch (error) {
        res
            .status(400)
            .json({ error: "Something went wrong with the SignIn :(" });
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id; // Get the user ID from the request parameters
        const user = await userService.getUserById(id); // Get the user by ID from the imported service function
        res.status(200).json(user); // Return the user
    } catch (error) {
        res
            .status(400)
            .json({ error: error.message });
    }
}

module.exports = {
    createUser,
    getUserById,
    signIn
}