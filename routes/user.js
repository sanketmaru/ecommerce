
var passport = require('passport');

module.exports = function(router){


    router.route('/authenticate').post(passport.authenticate('local',{
        successRedirect: '/',
        failureRedirect: '/login'
      })
    );
}
