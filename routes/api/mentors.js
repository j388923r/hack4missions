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
    console.log(req.query.tags);
    //users.findByTags(req.query.tags);
    res.send("something");
});

module.exports = router;
