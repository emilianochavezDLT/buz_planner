const express = require('express');
const router = express.Router();
const path = require('path');
userController = require('../controllers/user_controller');


//To protect the user routes
//This will check if the user is authorized to access the routes
/**
 * router.post('/api/protected', verifyJWT, someController.someFunction);
 * 
 * or
 * 
 * go to app.js and add the following lines of code
 * 
 * const verifyJWT = require('../services/verifyJWT');
 * 
 * //Routes Setup
 * const indexRoute = require('./urls/indexRoute');
 * app.use('/', indexRoute);
 * 
 * const userRoute = require('./urls/userRoutes');
 * app.use('/users', userRoute);
 * 
 * app.use(verifyJWT);
 * //Any routes after this line will be protected
 * const someRoute = require('./urls/someRoute');
 * app.use('/api', someRoute);
 * 
 * 
 * 
 */


// Define a route for the root URL
router.get('/createUser', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/user_endpoint.html'));
});
//To access the create user use /users/createUser
router.post('/createUser', userController.createUser);

//To get the user by id user /users/getUserByID/<id>
router.get('/getUserById/:id', userController.getUserById);


module.exports = router;