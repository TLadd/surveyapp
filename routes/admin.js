var express = require('express');
var auth = require('../auth');
var router = express.Router();

router.get('/', auth, function(req, res, next) {
  res.render('admin', { title: 'Express' });
});

module.exports = router;
