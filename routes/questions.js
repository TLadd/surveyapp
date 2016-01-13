var express = require('express');
var auth = require('../auth');
var router = express.Router();
var models  = require('../models');
var Question = models.Question;
var Choice = models.Choice;
var Sequelize = require('sequelize');

router.get('/', auth, function(req, res, next) {
  Question.findAll({
    include: [ Choice ]
  }).then(function(questions) {
    res.json(questions);
  });
});

router.get('/random', function(req, res, next) {
  var guestId = req.cookies.surveytest_uniqueguestid;

  Question.find({
    order: [
      [Sequelize.fn( 'RAND' )]
    ],
    include: [ Choice ],
    where: Sequelize.literal("NOT EXISTS (SELECT id FROM Responses WHERE Responses.QuestionId = Question.id AND Responses.guestId = '" + guestId + "')")
  }).then(function(question) {
    res.json(question);
  });
});

router.get('/:id', auth, function(req, res, next) {
  Question.find({
    where: { id: req.params.id },
    include: [ Choice ]
  }).then(function(question) {
    res.json(question);
  });
});

router.post('/', auth, function(req, res, next) {
  Question.create(req.body, {
    include: [ Choice ]
  }).then(function(question) {
    res.json(question);
  });
});

module.exports = router;
