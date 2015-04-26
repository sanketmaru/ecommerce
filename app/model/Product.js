var mongoose = require('mongoose');

var ProductModel = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  created_on: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductModel);
