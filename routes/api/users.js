var express = require('express');
var router = express.Router();
var users = require('../../models/users');

router.get('/', function(req, res, next) {
  res.send("Returning all users");
});

router.get('/:id', function(req, res, next) {
  res.send("Returning user with id: " + req.params.id);
});

router.post('/search', function(req, res, next) {
    users.findByTags(req.query.tags);
});

module.exports = router;
