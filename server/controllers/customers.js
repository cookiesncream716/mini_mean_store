var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return{
		index: function(req, res){
			Customer.find({}, function(err, results){
				if(err){
					console.log('error finding customers');
				} else{
					// console.log('found customers');
					res.json(results);
				};
			});
		},
		create: function(req, res){
			var customer = new Customer({name: req.body.name});
			customer.save(function(err, results){
				if(err){
					console.log('error saving customer' + err.message);
					res.json(err);
				} else{
					// console.log('saved customer');
					res.json(results);
				};
			});
		},
		destroy: function(req, res){
			Customer.remove({_id: req.params.id}, function(err, results){
				if(err){
					console.log('error deleting customer');
				} else{
					// console.log('deleted customer');
					res.json(results);
				}
			})
		}
	}
})();