const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');

console.log("Project Routes");
router.post('/createProject', projectController.createProject);

router.get('/getAllProjects', projectController.getAllProjects);

module.exports = router;