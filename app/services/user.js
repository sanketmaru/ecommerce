var Promise = require("bluebird"),
  service = require('./service'),
  User = require('../model/User'),
  _ = require('underscore');

var userService = Object.create(service);
userService.name = "UserService";

userService.authenticate = Promise.method(function(inputParams){
  User.findOne({'username' : inputParams.userName}, function(err, user){
    console.log("error" + error);
    console.log("user" + user);
  });
});

module.exports = userService;
