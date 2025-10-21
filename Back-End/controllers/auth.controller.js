const { userModel } = require("../models/user.model");
const { hashPassword } = require("../utils/auth.util");

register = async (req, res, next) => {
    try {
        const { fullName, username, password } = req.body;
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