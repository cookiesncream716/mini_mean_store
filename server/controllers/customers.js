var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return {
		index: function(req, res){
			Customer.find({}, function(err, results){
				if(err){
					console.log('error finding customers')
				} else{
					res.json(results):
				};
			});
		};
	}
})();