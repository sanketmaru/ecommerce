var mongoose = require('mongoose');

var User = new mongoose.Schema({
  username: String,
  password: String,
  created_on: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);
