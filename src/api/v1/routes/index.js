const express = require("express");
const router = express.Router();

const AuthRouter = require("./auth.route");

router.use("/auth", AuthRouter);

module.exports = router;
