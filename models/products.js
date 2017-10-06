var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
	firstname : String,
	lastname : String,
	age : Number
});

var productModel = mongoose.model('products', ProductSchema);

module.exports = productModel;
