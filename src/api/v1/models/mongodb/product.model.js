const { Schema } = require('mongoose');

const conn = require('../../helpers/connections_mongodb');

const reviewSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'user',
  },
});

const productSchema = new Schema(
  {
    // productId: { type: Number, require: true, default: 0 },
    // code: String,
    // name: String,
    // brand: String,
    // description: String,
    // release_date: Date,
    // specs: { type: Array, default: [] },
    // comments: {
    //   type: Array,
    //   default: [],
    // },
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      require: false,
      default: 0,
    },
    numReview: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  {
    collection: 'products',
    timestamps: true,
  }
);

module.exports = {
  _products: conn.model('product', productSchema),
};

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
