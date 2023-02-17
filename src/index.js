require("dotenv").config();
const express = require("express");
const { getConnectMysql } = require("./api/v1/helpers/mysql.database");
const Router = require("./api/v1/routes");
const app = express();
const PORT = process.env.PORT || 8080;

getConnectMysql();

app.use(Router);
app.use("/", (req, res) => {
  res.send("Hello World!");
  console.log("hello world!");
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});

// const setupExpress = () => {};
