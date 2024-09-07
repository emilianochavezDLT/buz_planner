const express = require('express');
const router = express.Router();
refreshController = require('../controllers/user_controller');

// Define a route for the root URL
router.get('/refresh', refreshController.handelRefreshToken);

module.exports = router;


