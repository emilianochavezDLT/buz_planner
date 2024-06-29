const express = require('express');
const router = express.Router();
userController = require('../controllers/user_controller');

// Define a route for the root URL

//To access the create user use /users/createUser
router.post('/createUser', userController.createUser);

//To get the user by id user /users/getUserByID/<id>
router.get('/getUserById/:id', userController.getUserById);

//To sign in use /users/signIn
router.post('/signIn', userController.signIn);

module.exports = router;