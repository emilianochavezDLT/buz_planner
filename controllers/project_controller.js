const projectService = require('../services/project_service');


const projectValidation = (project) => {

    if(!project.projectName){
        throw new Error('Please provide a project name');
    }
    else{
        return true;
    }

}

const createProject = async (req, res) => {
    
    const project = {
        projectName: req.body.projectName,
        projectDescription: req.body.projectDescription,
        userId: req.user.id
    }
    
    try{
        projectValidation(project);
        const newProject = await projectService.createProject(project);
        res.status(201).json(newProject);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

const getAllProjects = async (req, res) => {
    const userId = req.user.id;
    try{
        const projects = await projectService.getAllProjects(userId);
        res.status(200).json(projects);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}






module.exports = {
    createProject,
    getAllProjects

}