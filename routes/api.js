var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


var Product = require('../models/products');
var user = require('../models/auth');

/*Get Laa user List*/
router.get('/products', ensureToken, function(req, res) {
	Product.find({}, function(err, data){
		if(err){
			res.send(err)
		}
		else
		{
			res.send(data);
		}
	})	   
});



router.post('/login',function(req, res){
	const user = { id : 3 };
	const token = jwt.sign({user}, 'my_secret_key');
	res.json({
		token : token
	});
});

router.get('/auth', ensureToken, function(req,res){

	jwt.verify(req.token, 'my_secret_key', function(err,data){
		if(err){
			return res.sendStatus(403)
		} else {
			res.json({
				text : "This is authenticated",
				data : data
			});
		}
	})
})

function ensureToken(req,res,next){
	const bearerHeader = req.headers["authorization"];
	if(typeof bearerHeader != 'undefined'){
		const bearer = bearerHeader.split(" ");
		const bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	} else {
		res.sendStatus(403);
	}
}
module.exports = router;