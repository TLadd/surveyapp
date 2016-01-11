var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.cookies.surveytest_uniqueguestid) {
    res.cookie('surveytest_uniqueguestid', uuid.v4());
  }

  res.render('index', { title: 'Express' });
});

module.exports = router;
