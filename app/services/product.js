var Promise = require("bluebird"),
  service = require('./service'),
  Product = require('../model/Product'),
  _ = require('underscore');

var productService = Object.create(service);
productService.name = "ProductService";

productService.createProduct = Promise.method(function(inputParams){

  var product = new Product({
    name: inputParams.name,
    description: inputParams.description,
    price:inputParams.price
  });

  return product.save()
	  .then(function(result){
	  	return result;
	  })
});

module.exports = productService;


