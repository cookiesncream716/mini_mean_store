var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var CustomerSchema = new mongoose.Schema({
	name: {type: String, require: true, unique: true},
	created_at: {type: Date, default: new Date}
});

CustomerSchema.plugin(uniqueValidator);
mongoose.model('Customer', CustomerSchema);