const { userModel } = require("../models/user.model");

register = async (req, res, next) => {
    try {
        const { fullName, email, password } = req.body;
        const user = await userModel.create({
            fullName,
            email,
            password: hashPassword(password)
        })
        res.send(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    login,
    register
}