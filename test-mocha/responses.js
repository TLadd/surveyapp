var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect;
var models = require('../models');
var Sequelize = require('sequelize');
var Question = models.Question;
var Response = models.Response;
var Choice = models.Choice;
var _ = require('lodash');

chai.use(chaiHttp);

describe('Responses', function() {
  beforeEach(function() {
    return models.sequelize.drop({logging: false, cascade: true}).then(function() {
      return models.sequelize.sync({logging: false});
    });
  });

  var createQuestion = function(options) {
    return Question.create(_.extend({
      questionText: 'A great question',
      Choices: [
        { id: 1, choiceText: 'Choice 1'},
        { id: 2, choiceText: 'Choice 2'}
      ]
    }, options), {
      include: [ Choice ]
    });
  };

  it('should create a response on /responses POST', function(done) {
    createQuestion({id: 1}).then(function() {
      var body = {
        QuestionId: 1,
        ChoiceId: 2
      };

      chai.request(server)
        .post('/responses')
        .set('surveytest_uniqueguestid', '1234')
        .send(body)
        .end(function(err, res) {
          expect(res.status).equal(200);
          expect(res.body.QuestionId).equal(1);
          expect(res.body.ChoiceId).equal(2);
          done();
        });
    });
  });

  it('should increment the choice numChosen field on /responses POST', function(done) {
    createQuestion({id: 1}).then(function() {
      var body = {
        QuestionId: 1,
        ChoiceId: 2
      };

      chai.request(server)
        .post('/responses')
        .set('surveytest_uniqueguestid', '1234')
        .send(body)
        .end(function(err, res) {
          Choice.findById(2).then(function(choice) {
            expect(choice.numChosen).equal(1);
            done();
          });
        });
    });
  });
});
