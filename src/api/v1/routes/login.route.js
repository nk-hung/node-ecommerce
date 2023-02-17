const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { username, email, password, confirmPassword, mobile } = req.body;
  res.send({ body: req.body });
});

router.post("/", (req, res) => {
  const { username, email, password, confirmPassword, mobile } = req.body;
  console.log("req", username);
  res.send({ body: req.body });
});

module.exports = router;
