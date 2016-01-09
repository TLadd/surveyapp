var express = require('express');
var router = express.Router();
var models  = require('../models');
var Sequelize = require('sequelize');

router.get('/', function(req, res, next) {
  res.json({
    questionText: 'hello puppets'
  });
});

router.get('/random', function(req, res, next) {
  models.Choice.findAll({}).
    then(function(choices) {
      console.log(choices);
    });

  models.Question.find({
    order: [
      Sequelize.fn( 'RAND' ),
    ],
    include: [ models.Choice ]
  }).then(function(question) {
    res.json(question);
  });
});

module.exports = router;
