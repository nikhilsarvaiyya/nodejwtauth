var restful = require('node-restful');
var mongoose = restful.mongoose;

var AuthSchema = new mongoose.Schema({
	username : String,
	password : String
	
});

module.exports = restful.model('/auth',AuthSchema);