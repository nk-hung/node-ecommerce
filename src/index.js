const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
require('dotenv').config();
require('./api/v1/helpers/connections_mongodb');

const { getConnectMysql } = require('./api/v1/helpers/connections_mysql');
const Router = require('./api/v1/routes');
const app = express();
const PORT = process.env.PORT || 8080;

getConnectMysql();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(Router);

// NOT FOUND
app.use((req, res, next) => {
  res.status(404);
  next(createError.NotFound('Not Found!'));
});
// ERROR HANDLER
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.log('res:::', res);
  res.status(statusCode);
  res.json({
    status: err.status | 500,
    msg: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});
app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
