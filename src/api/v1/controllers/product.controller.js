const { _products } = require('../models/mongodb/product.model');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await _products.find({});
      return res.status(200).json({ status: 200, success: true, data: result });
    } catch (error) {
      next(error);
      console.log('error::', error);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;

      const product = await _products.findById({ _id: id });

      if (!product) {
        res.status(404);
        throw new Error('Product not Found!');
      } else {
        return res
          .status(200)
          .json({ status: 200, success: true, data: product });
      }
    } catch (error) {
      next(error);
      console.log('Error get one product::', error);
    }
  },
};
