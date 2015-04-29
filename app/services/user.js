var Promise = require("bluebird"),
  service = require('./service'),
  User = require('../model/User'),
  _ = require('underscore');

var userService = Object.create(service);
userService.name = "UserService";

userService.authenticate = Promise.method(function(inputParams){
  User.findOne({'username' : inputParams.username}, function(err, user){
    console.log("error" + err);
    console.log("user" + user);
    return user;
  });
});

userService.signup = Promise.method(function(inputParams){
  var user = new User({
    username: inputParams.username,
    password: inputParams.password
  });

  return user.save(function(error) {
    if (error){
      console.log('error' + error.message);
    }
    else {
      console.log('no error');
    }    
  });
});

module.exports = userService;
