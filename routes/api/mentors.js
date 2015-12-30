var express = require('express');
var router = express.Router();
var users = require('../../models/users');

// var app = express();
// router.use(router.router);

router.get('/', function(req, res, next) {
  res.send("Returning all users");
});

router.get('/:id', function(req, res, next) {
  res.send("Returning user with id: " + req.params.id);
});

router.post('/search', function(req, res) {
    //res.send(users.findByTags(req.query.tags));
    
    console.log(req.body);
    console.log("tags: " + req.body["tags[]"]);

    var tags_list = req.body["tags[]"];

    //res.json(users.findByTags(tags_list, function() {}));

    users.findByTags(tags_list, function(err, results) {
        res.json(results);
    });
});

router.post('/searchByName', function (req, res) {
	console.log('search by name api');
	console.log(req.body);
	users.findByName(req.body.name, function (err, results) {
		if (err){
			console.log(err);
			res.send(err);
		} else
			res.json(results);
	});
});

module.exports = router;
