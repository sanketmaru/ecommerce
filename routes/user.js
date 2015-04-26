
var passport = require('passport');
var userController = require('../app/controllers/user');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(router){


     router.route('/authenticate').post(passport.use('login',new LocalStrategy({
         passReqToCallback : true
       }, userController.authenticate))
     );

    // passport.use('authenticate', new LocalStrategy({
    //     passReqToCallback : true
    //   }, userController.authenticate)
    // );

}
