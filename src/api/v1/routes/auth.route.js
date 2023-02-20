const express = require("express");
const { checkDuplicateInfo: checkDuplicateUsernameOrEmail, checkRolesExisted } = require("../middlewares/verify_signup");
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

router.post("/signin", AuthController.signIn)

router.post("/signup", checkDuplicateUsernameOrEmail, checkRolesExisted, AuthController.signUp);

module.exports = router;
