const db = require('../models');
const User = db.User;


const createUser = async (user) => {
    try {
        const newUser = await User.create(user);
        return newUser;

    } catch (error) {
        throw new Error(error, "Could not create user");
    }
}

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        return user;

    } catch (error) {
        throw new Error(error, "Could not find user");
    }
}

const findUser = async (user) => {
    
    return User.find(user => user.email === user.email && user.password === user.password)
    
}
