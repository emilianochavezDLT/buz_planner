const { projects } = require('../models'); // Import the User model

//Create a new project
const createProject = async (project) => {
    try{
        const newProject = await projects.create(project); // Create a new project
        return newProject; // Return the new project
    }
    catch(error){
        throw new Error(error, "Could not create project");
    }
}

const getAllProjects = async (userId) => {
    try{
        const allProjects = await projects.findAll({
            where:{
                userId: userId
            }
        });
        return allProjects;
    }
    catch(error){
        throw new Error(error, "Could not find projects");
    }

}



module.exports = {
    createProject,
    getAllProjects
}