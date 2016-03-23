var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return{
		index: function(req, res){
			Order.find({}, function(err, results){
				if(err){
					console.log('err retrieving orders' + err);
				} else{
					// console.log('retrieved orders');
					res.json(results);
				}
			});
		},
		create: function(req, res){
			var order = new Order({name: req.body.customer.name, product: req.body.product, quantity: req.body.quantity});
			order.save(function(err, results){
				if(err){
					console.log('error saving order' + order.errors);
				} else{
					// console.log('order saved');
					res.json(results);
				}
			});
		}
	}
})();