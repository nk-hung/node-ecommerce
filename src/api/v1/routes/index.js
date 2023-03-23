const express = require('express');
const ImportData = require('../../../DataImport');
const router = express.Router();

const AuthRouter = require('./auth.route');
const ProductRouter = require('./product.route');

router.use('/api/import', ImportData);
router.use('/auth', AuthRouter);
router.use('/products', ProductRouter);
router.use('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
