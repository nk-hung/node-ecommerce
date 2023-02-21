const { Schema } = require('mongoose');
const conn = require('../../helpers/connections_mongodb');

const cartSchema = new Schema({
  userId: Number,
  cartId: Number,
  status: { type: String, default: 'active' },
  modifiedOn: { type: Date, default: Date.now() },
  products: Array
}, {
  collection: 'carts',
  timestamps: true
})

module.exports = {
  _cart: conn.model('carts', cartSchema)
}