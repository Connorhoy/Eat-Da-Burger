// JS Code (Burgers Controller)

// Requiring Dependincies
var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// In theory...this creates the routes.
router.get("/", function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	burger.create([
		req.body.name
	],function(){
		res.redirect("/");
	});
});

// Couldn't figure this part out.
router.put("/:id", function(req, res){
});

// Finally, exports the module.
module.exports = router;