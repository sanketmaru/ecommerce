var mongoose = require('mongoose');
var User = require("../app/model/User.js");
var should = require('chai').should();
var config = require('../config/default');

var db;

describe('User', function() {

  before(function(done) {
    db = mongoose.connect(config.mongo.uri, config.mongo.options);
    console.log('db' + db);
    done();
  });

  after(function(done) {
   mongoose.connection.close()
   done();
  });

  beforeEach(function(done) {
    var user = new User({
      username: 'test',
      password: 'test'
    });

    user.save(function(error) {
      if (error){
        console.log('error' + error.message);
      }
      else {
        console.log('no error');
      }
      done();
    });
  });

  it('find a user by username', function(done) {
    User.findOne({ username: 'test' }, function(err, user) {
      console.log("user" + user);
      user.username.should.eql('test');
      console.log("username: ", user.username)
      done();
    });
  });

  afterEach(function(done) {
    User.remove({username: 'test'}, function() {
      done();
    });
  });

});
