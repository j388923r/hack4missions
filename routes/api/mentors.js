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

router.post('/search', function(req, res, next) {
    res.send(users.findByTags(req.query.tags));
});

router.post('/searchByName', function (req, res, next) {
	res.send(users.findByName(req.query.name));
});

module.exports = router;
