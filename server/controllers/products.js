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
		},
		update: function(req, res){
			console.log(req.body.name)
			Product.findOne({name: req.body.name}, function(err, product){
				var num=product.quantity - req.body.quantity;
				console.log("qunatity= "+ num )
				if(num < 0){
					console.log('error - less than zero');
				} else{
					console.log("else" + num + product.name)
					Product.update({name: product.name}, {quantity: num}, function(err, product){
						console.log('updated quantity')
					});
				}
			})
			
			// if(product.quantity - req.body.quantity > -1){
				// console.log("product left")
			// }
			// Product.update({name: req.body.name}, {quantity: -= req.body.quantity})
		}
	};
})();