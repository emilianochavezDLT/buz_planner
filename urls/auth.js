const express = require('express');
const router = express.Router();
loginController = require('../controllers/user_controller');

// Define a route for the root URL
//To sign in use /users/logIn
router.post('/logIn', loginController.logIn);

module.exports = router;


