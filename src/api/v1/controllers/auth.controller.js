const bcrypt = require('bcryptjs/dist/bcrypt');
const { generatePassword } = require('../helpers/auth_helper');
const { generateAccessToken } = require('../helpers/jwt_service');

const { _user } = require('../models/mongodb/user.model');
// const db = require('../models/mysql');

// db.role.belongsToMany(db.e_user, {
//   through: 'user_roles',
//   foreignKey: 'roleId',
//   otherKey: 'userId',
// });

// db.e_user.belongsToMany(db.role, {
//   through: 'User_roles',
//   foreignKey: 'userId',
//   otherKey: 'roleId',
// });

module.exports = {
  signIn: async (req, res) => {
    const { username, password } = req.body;
    console.log('body::', req.body);
    const existUser = await _user.findOne({ username: username });

    if (!existUser) {
      // return res.status(404).send({ message: 'User not found!' })
      return res.json({ success: false, msg: 'Not found User!' });
    }
    console.log('user', existUser);

    const pwMatched = await bcrypt.compare(password, existUser.password);
    console.log('compare:::', pwMatched);

    if (!pwMatched) {
      return res
        .status(200)
        .json({ status: 500, success: false, msg: 'Wrong Password!' });
    }

    const token = generateAccessToken(existUser._id, existUser.username);

    return res.status(200).json({ success: true, accessToken: token });
  },
  signUp: async (req, res) => {
    const { username, email, password, confirmPassword, mobile } = req.body;

    if (password !== confirmPassword) {
      return res.status(500).json({ message: 'Password does not match!' });
    }

    const hashPassword = await generatePassword(password);

    const dataInsert = {
      username,
      email,
      password: hashPassword,
      mobile,
    };

    console.log('dataInsert', dataInsert);

    const createUser = await _user.create(dataInsert);

    if (createUser) {
      const token = generateAccessToken(createUser.username);
      return res.status(200).json({ accessToken: token, message: 'Success!' });
    }
  },
};
