const { userModel } = require("../models/user.model");
const { hashPassword, signToken, comparePassword } = require("../utils/auth.util");


login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({
            username,
        });

        if (!user) {
            throw { status: 400, message: "کاربری با این ایمیل یافت نشد" };
        }

        if (comparePassword(password, user.password)) {
            const token = signToken({ id: user._id, email: user.email });
            res.send({ token, message: "login successfully" });
        } else {
            throw { status: 400, message: "email or password is incorrect" };
        }

    } catch (error) {
        next(error);
    }
}

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
    login,
    register
}