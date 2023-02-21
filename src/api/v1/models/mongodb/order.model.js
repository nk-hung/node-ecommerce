const { Schema } = require('mongoose');
const conn = require('../../helpers/connections_mongodb');

const orderSchema = new Schema({
  orderId: Number,
  cartId: Number,
  userId: Number,
  shipping: Number,
  payment: Number,
  products: Array
}, {
  collection: 'orders',
  timestamps: true
})


module.exports = {
  _order: conn.model('orders', orderSchema)
};