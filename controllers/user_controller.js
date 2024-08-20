const userService = require('../services/user_service');


//Helper functions for the user controller
const user_fields_validation = (user) => {
    if (!user.firstName || !user.lastName || !user.email) { // Check if the required fields are provided
        throw new Error('Please provide all the required fields'); // Throw an error if the required fields are not provided
    }
    else if (!user.email.includes('@') || !user.email.includes('.')) { // Check if the email is valid
        throw new Error('Please provide a valid email address'); // Throw an error if the email is not valid
    }
    else {
        return true; // Return true if the fields are valid
    }
}

const user_signin_validation = (user) => {
    if (!user.email) { // Check if the email is provided
        throw new Error('Please provide an email address'); // Throw an error if the email is not provided
    }
    else {
        return true; // Return true if the email is provided
    }
}

//Controller functions
//Using async and await to handle promises that are returned from the service functions

const createUser = async (req, res) => {
    try {
        const user = req.body; // Get the user object from the request body

        user_fields_validation(user); // Validate the user fields

        // Awating the createUser function from the userService
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

        user_signin_validation(user); // Validate the user fields

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