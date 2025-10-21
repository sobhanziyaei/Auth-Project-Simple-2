const { userModel } = require("../models/user.model");
const { hashPassword } = require("../utils/auth.util");

register = async (req, res, next) => {
    try {
        const { fullName, username, password } = req.body;
        
        // Check if user with this username already exists
        const existingUser = await userModel.findOne({ username });
        if (existingUser) {
            const error = new Error('User with this username already exists');
            error.statusCode = 400;
            return next(error);
        }
        
        const user = await userModel.create({
            fullName,
            username,
            password: hashPassword(password)
        })
        res.send(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    register
}