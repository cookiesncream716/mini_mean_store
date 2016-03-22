var mongoose = require('mongoose');
var Product = mongoose.model('Product');

modules.exports = (function(){
	return{
		index: function(req, res){
			Product.find({}, function(err, results){
				if(err){
					console.log('err getting products');
				} else{
					res.json(result);
				};
			});
		}
	};
})();