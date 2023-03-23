const express = require('express');
const productController = require('../controllers/product.controller');
const { verifyToken } = require('../middlewares/verify_token.middleware');

const { _products } = require('../models/mongodb/product.model');

const router = express.Router();

// create product
router.post('/', verifyToken, async (req, res) => {
  try {
    const product = await _products.create({ ...req.body });
    return res.status(200).json({
      msg: 'Create Product Success!',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: 'Create product fail!',
    });
  }
});

// GET ALL PRODUCTS
router.get('/', productController.getAll);
// GET ONE PRODUCT
router.get('/:id', productController.getOne);

router.get('/detail/:id', verifyToken, (req, res) => {});

module.exports = router;
