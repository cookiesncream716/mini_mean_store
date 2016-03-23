var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function(){
	return{
		index: function(req, res){
			Product.find({}, function(err, results){
				if(err){
					console.log('err getting products');
				} else{
					res.json(results);
				};
			});
		},
		create: function(req, res){
			var product = new Product({name: req.body.name, image: req.body.image, description: req.body.description, quantity: req.body.quantity});
			product.save(function(err, results){
				if(err){
					console.log('error saving product');
				} else{
					res.json(results);
				}
			})
		}
	};
})();