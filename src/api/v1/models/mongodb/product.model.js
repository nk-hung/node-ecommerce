const { Schema } = require('mongoose');

const conn = require('../../helpers/connections_mongodb');

const productSchema = new Schema({
  productId: { type: Number, require: true },
  code: String,
  name: String,
  brand: String,
  description: String,
  release_date: Date,
  specs: { type: Array, default: [] },
  comments: {
    type: Array,
    default: []
  }
}, {
  collection: 'products',
  timestamps: true
})

module.exports = {
  _products: conn.model('products', productSchema)
}


/* 
  const productExam = [
  {
    "_id": ObjectId("..."),
    "code": 'CAMERA-01',
    "brand": 'Kann0n',
    "description": "asdf",
    "release_date": ISODate('...'),
    "weight_g": 367,
    "comments": [
      {
        userId: 1,
        comment: '...'
      }
    ]
  }
]
*/