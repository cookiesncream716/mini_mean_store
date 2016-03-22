var orders = require('./../controllers/orders.js');
var customers = require('./../controllers/customers.js');
var products = require('./../controllers/products.js');

module.exports = function(app){
	app.get('/customers', function(req, res){
		customers.index(req, res);
	});
}