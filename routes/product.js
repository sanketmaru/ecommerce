
var productController = require('../app/controllers/product');

module.exports = function(router){
	/* GET users listing. */
	router.route('/product').post(productController.createProduct);

	/*router.post('/product/:id', productController.updateProduct);

	router.delete('/product/:id', productController.deleteProduct);*/

}
