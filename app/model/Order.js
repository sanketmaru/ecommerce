var mongoose = require('mongoose');

var Order = new mongoose.Schema({
  product_ids: String,
  total: Number,
  isCompleted: Boolean,
  created_on: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', Order);
