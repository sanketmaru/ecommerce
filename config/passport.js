var userController = require('../app/controllers/user');
var User = require('../app/model/User');
var LocalStrategy = require('passport-local').Strategy;


module.exports = function(passport){

  passport.use(new LocalStrategy(function(username, password,done){
    User.findOne({ username : username},function(err,user){
        if(err) {
          return done(err);
        }
        if(!user){
            return done(null, false, { message: 'Incorrect username.' });
        }

        hash( password, user.salt, function (err, hash) {
          if (err) { return done(err); }
          if (hash == user.hash) return done(null, user);
          done(null, false, { message: 'Incorrect password.' });
        });
    });
  }));

};
