const userService = require('../services/user_service');
const jwt = require('jsonwebtoken');
require('dotenv').config();


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

// Generate an access token
const genAccessToken = (infoInToken) => {
    return jwt.sign(infoInToken, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
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

const logIn = async (req, res) => {

    const user = req.body; // Get the user object from the request body
    
    try {
        
        user_fields_validation(user); // Validate the user fields
        

        const userFound = await userService.findUser(user); // Find the user from the imported service function
        
        if (userFound) {
            
            infoToSendInToken = { email: user.email }; // Information to send in the token
            
            
            // Generate an access token
            accessToken = genAccessToken(infoToSendInToken);
            
            
            const refreshToken = jwt.sign(
                { email: user.email },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d' }
            );
            
            // Set the refresh token in a cookie 
            res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // Set the refresh token in a cookie
            res.status(200).json({ accessToken }); // Return the access token
        } else {
            res.status(400).json({ error: "Try Again" }); // Return an error if the user is not found
        }
        
    } catch (error) {
        
        res
            .status(400)
            .json({error: error.message});
    }
}

const handelRefreshToken = (req, res) => {

    const cookies = req.cookies; // Get the cookies from the request
    //The refresh token is stored in the cookies. Look at the logIn function where 
    //the refresh token is set in the cookies
    if (!cookies.refreshToken) {
        return res.status(403).json({ error: 'Access Denied' }); // Return an error if the refresh token is not provided
    }

    // Verify the refresh token
    jwt.verify(cookies.refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid Token' }); // Return an error if the token is invalid
        }
        const accessToken = genAccessToken({ email: decoded.email }); // Generate an access token
        res.status(200).json({ accessToken }); // Return the access token
    });
    
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
    logIn,
    handelRefreshToken
}