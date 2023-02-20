const { Schema } = require('mongoose');

const conn = require('../../helpers/connections_mongodb');

const productsSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  author: String,
})

module.exports = {
  products: conn.model('products', productsSchema)
}