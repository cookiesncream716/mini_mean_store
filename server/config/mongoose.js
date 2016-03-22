var mongoose = require('mongoose');
var fs = require('fs'):

mongoose.connect('mongodb://localhost/miniMeanStore');

var models_path = __dirname + '/../models';

fs.readirSync(models_path).forEach(function(file){
	if(file.indexOf('js') > 0){
		require(models_path + '/' + file);
	};
});