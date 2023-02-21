const { Schema } = require('mongoose');
const conn = require('../../helpers/connections_mongodb');

const inventorySchema = new Schema({
  productId: Number,
  quantity: Number,
  reservations: Array,
  create_at: { type: Date, default: Date.now() },
}, {
  collection: 'inventories',
  timestamps: true
})

module.exports = {
  _inventory: conn.model('inventories', inventorySchema)
}