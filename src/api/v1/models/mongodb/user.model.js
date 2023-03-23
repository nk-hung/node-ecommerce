const { Schema } = require('mongoose');

const conn = require('../../helpers/connections_mongodb');

const userSchema = new Schema(
  {
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  {
    collection: 'user',
    timestamps: true,
  }
);

module.exports = {
  _user: conn.model('user', userSchema),
};
