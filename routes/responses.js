var express = require('express');
var router = express.Router();
var models  = require('../models');
var Response = models.Response;
var Choice = models.Choice;
var Sequelize = require('sequelize');

router.post('/', function(req, res, next) {
  var guestId = req.cookies.surveytest_uniqueguestid;
  var choiceId = req.body.ChoiceId;
  var questionId = req.body.QuestionId;

  /* Increment numChosen for the Choice and create a Response object */
  models.sequelize.transaction(function(t) {
    return Choice.findById(choiceId, {transaction: t}).then(function(choice) {
      return choice.increment('numChosen', {transaction: t});
    }).then(function() {
      return Response.create({
        ChoiceId: choiceId,
        QuestionId: questionId,
        guestId: guestId
      }, {transaction: t});
    });
  }).then(function(response) {
    res.json(response);
  });

});

module.exports = router;
