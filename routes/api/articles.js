var express = require('express');
var router = express.Router();
var Article = require('../../models/article');

/* GET */
router.get('/', function(req, res, next) {
	console.log("Getting all articles");
	/*res.send({
		title: "Dummy Article",
		imageUrl: "http://github.com",
		description: "seeing if this works"
	});*/
	
	Article.findAll(function(err, articles) {
		console.log("callback called");
		if(err) {
			console.log(err);
			res.send(err);
		} else {
			res.json(articles);
		}
	});
	
});

/* GET */
router.get('/:id', function(req, res, next) {
	Article.findById(req.params.id, function(err, article) {
		if(err) {
			console.log(err);
			res.send(err);
		} else {
			res.json(article);
		}
	});
	
});

/* POST */
router.post('/', function(req, res, next) {
	var title = req.body.title;
	var description = req.body.description;
	var imageUrl = req.body.imageUrl;
	var link = req.body.link;
	var tags = req.body.tags;
	
	console.log(title);
	console.log(description);
	console.log(imageUrl);
	console.log(link);
	console.log(tags);
	
	/*Article.create(title, imageUrl, link, description, tags, function(err, article) {
		if(err) {
			console.log(err);
			res.send(err);
		} else {
			res.json(article);
		}
	});*/
	
	res.send("Created");
	
});

module.exports = router;
