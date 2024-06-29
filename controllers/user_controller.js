const userService = require('../services/user_service');

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await userService.createUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        res
            .status(400)
            .json({ error: error.message });
    }
}

const signIn = async (req, res) => {
    try {
        const user = req.body;
        const userFound = await userService.findUser(user);
        if (userFound) {
            res.status(200).json(userFound);
        } else {
            res.status(400).json({ error: "User not found" });
        }
        
    } catch (error) {
        res
            .status(400)
            .json({ error: "Something went wrong with the SignIn :(" });
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getUserById(id);
        res.status(200).json(user);
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