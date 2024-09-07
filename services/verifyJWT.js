const jwt = require('jsonwebtoken');
require('dotenv').config();

//verifyJWT is Used for authentication

//When we are verifying the token, we are checking if the token is valid and if it has expired

//The verifyJWT function is a middleware that verifies the access token
//It checks if the token is provided and if it is valid
//If the token is not provided, it returns an error

//This function is used in the routes that require authentication

// Verify the access token
verifyJWT = (req, res, next) => {

    const token = req.header('Authorization'); // Get the token from the header

    if (!token) {
        return res.status(401).json({ error: 'Access Denied' }); // Return an error if the token is not provided
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => { // Verify the token
        if (err) {
            return res.status(403).json({ error: 'Invalid Token' }); // Return an error if the token is invalid
        }
        console.log(decoded);
        req.user = decoded.email // Using the decoded email to get the user
        next(); // Call the next middleware
    });

}

module.exports = verifyJWT; // Export the function