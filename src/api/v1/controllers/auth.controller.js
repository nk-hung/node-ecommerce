const bcrypt = require("bcryptjs/dist/bcrypt");
const { generatePassword } = require("../helpers/auth.helper");
const { generateToken } = require("../helpers/generateToken");

const db = require('../models')

db.role.belongsToMany(db.e_user, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId',
})

db.e_user.belongsToMany(db.role, {
    through: 'User_roles',
    foreignKey: 'userId',
    otherKey: 'roleId'
})

module.exports = {
    signIn: async (req, res) => {
        const { username, password } = req.body;

        const existUser = await db.e_user.findOne({
            where: { username }
        });

        if (!existUser) {
            return res.status(404).json({ message: 'User not found!' })
        }

        const pwMatched = bcrypt.compare(password, existUser.password);
        if (!pwMatched) {
            return res.status(400).json({ message: 'Wrong Password!' })
        };

        const token = generateToken(existUser.id, existUser.username);

        return res.status(200).json({ accessToken: token })
    },
    signUp: async (req, res) => {
        const { username, email, password, confirmPassword, mobile, is_admin } = req.body;

        if (password !== confirmPassword) {
            return res.status(500).json({ message: 'Password does not match!' })
        }

        const hashPassword = await generatePassword(password);

        const dataInsert = {
            username, email, password: hashPassword, mobile, is_admin
        }

        console.log('dataInsert', dataInsert)

        const createUser = await db.e_user.create(dataInsert)

        if (createUser) {
            const token = generateToken(createUser.id, createUser.username)
            return res.status(200).json({ accessToken: token, message: 'Success!' })
        }
    }
}