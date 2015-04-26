var productService = require('../services/product');
var requestHandler = require('../../lib/requestHandler');
var _ = require('underscore');


module.exports = {
	createProduct : function(req, res){
		var productParams = _.pick(req.body, 'name', 'description' , 'price');
		requestHandler.handle(req, res, productService.createProduct, productParams);
	}
};
/*/***
 * Performs operation for creating a product
 *
 * .createProduct()
 *
 * @param req
 * @param res
 */
/*exports.createProduct = function(req, res){
	var productParams = _.pick('name', 'description' , 'price');
	requestHandler.handle(req, res, productService.createProduct, productParams);
}


exports.updatProduct = function(req, res){
	var productParams = _.pick('name', 'description' , 'price');
	requestHandler.handle(req, res, productService.updatProduct, productParams);
}


exports.deleteProduct = function(req, res){
	var productParams = _.pick('name', 'description' , 'price');
	requestHandler.handle(req, res, productService.deleteProduct, productParams);
}
*/
