var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return{
		index: function(req, res){
			Order.find({}, function(err, results){
				if(err){
					console.log('err getting orders');
				} else{
					res.json(results);
				};
			});
		}
	};
})();