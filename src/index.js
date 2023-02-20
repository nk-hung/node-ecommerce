const createError = require('http-errors')
const express = require("express");
require("dotenv").config();
require('./api/v1/helpers/connections_mongodb')

const { getConnectMysql } = require("./api/v1/helpers/connections_mysql");
const Router = require("./api/v1/routes");
const app = express();
const PORT = process.env.PORT || 8080;

getConnectMysql();

app.use(express.urlencoded({ 'extended': true }));
app.use(express.json());

app.use(Router);

app.use((req, res, next) => {
  next(createError.NotFound('Not Found!'))
})

app.use((err, req, res, next) => {
  res.json({
    status: err.status | 500,
    msg: err.message
  })
})
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});

