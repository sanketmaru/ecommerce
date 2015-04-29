var userController = require('../app/controllers/user');

module.exports = function(router){

	router.route('/authenticate').post(userController.authenticate);
	router.route('/signup').post(userController.signup);

};
