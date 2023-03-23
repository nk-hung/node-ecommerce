const express = require('express');
const products = require('./api/v1/data/products');
const users = require('./api/v1/data/user');
const { _products } = require('./api/v1/models/mongodb/product.model');
const { _user } = require('./api/v1/models/mongodb/user.model');

const router = express.Router();

router.post('/user', async (req, res) => {
  await _user.deleteMany({});
  const importUser = await _user.insertMany(users);
  return res.send({ importUser });
});

router.post('/product', async (req, res) => {
  await _products.deleteMany({});
  const importProduct = await _products.insertMany(products);
  return res.send({ importProduct });
});
module.exports = router;
