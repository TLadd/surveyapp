var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect;
var models = require('../models');
var Sequelize = require('sequelize');
var Question = models.Question;
var Choice = models.Choice;
var _ = require('lodash');

chai.use(chaiHttp);

describe('Questions', function() {
  beforeEach(function() {
    return models.sequelize.drop({logging: false, cascade: true}).then(function() {
      return models.sequelize.sync({logging: false});
    });
  });

  var createQuestion = function(options) {
    return Question.create(_.extend({
      questionText: 'A great question',
      Choices: [
        { choiceText: 'Choice 1'},
        { choiceText: 'Choice 2'}
      ]
    }, options), {
      include: [ Choice ]
    });
  };

  var verifyQuestion = function(done) {
    return function(err, res) {
      expect(res.status).equal(200);
      expect(res.body.questionText).equal('A great question');
      expect(res.body.Choices.length).equal(2);
      choiceTexts = [res.body.Choices[0].choiceText, res.body.Choices[1].choiceText];
      expect(choiceTexts).to.include('Choice 1');
      expect(choiceTexts).to.include('Choice 2');
      done();
    };
  };

  describe('on /questions GET', function(done) {
    it('should return all questions on /questions GET', function(done) {
      createQuestion({id: 1, questionText: 'Question 1'}).then(function() {
        createQuestion({id: 2, questionText: 'Question 2'}).then(function() {
          chai.request(server)
            .get('/questions')
            .auth('admin', 'letmein')
            .end(function(err, res) {
              expect(res.status).equal(200);
              expect(res.body.length).equal(2);
              var question1 = res.body[0];
              var question2 = res.body[1];
              expect(question1.questionText).equal('Question 1');
              expect(question2.questionText).equal('Question 2');
              done();
            });
        });
      });

    });

    it('should return 401 if not authenticated', function(done) {
      chai.request(server)
        .get('/questions')
        .end(function(err, res) {
          expect(res.status).equal(401);
          done();
        });
    });
  });

  it('should return a random question on /questions/random GET', function(done) {
    createQuestion().then(function() {
      chai.request(server)
        .get('/questions/random')
        .end(verifyQuestion(done));
    });
  });

  describe('on /questions/:id GET', function(done) {
    it('should return the specified question', function(done) {
      createQuestion({id: 1}).then(function() {
        createQuestion({id: 2, questionText: 'Wrong question'}).then(function() {
          chai.request(server)
            .get('/questions/1')
            .auth('admin', 'letmein')
            .end(verifyQuestion(done));
        });
      });
    });

    it('should return 401 if not authenticated', function(done) {
      createQuestion({id: 1}).then(function() {
        createQuestion({id: 2, questionText: 'Wrong question'}).then(function() {
          chai.request(server)
            .get('/questions/1')
            .end(function(err, res) {
              expect(res.status).equal(401);
              done();
            });
        });
      });
    });
  });

  describe('on /questions PUT', function(done) {
    it('should create a new question on /questions PUT', function(done) {
      var question = {
        questionText: 'A great question',
        Choices: [{ choiceText: 'Choice 1'}, { choiceText: 'Choice 2'}]
      };

      chai.request(server)
        .post('/questions')
        .auth('admin', 'letmein')
        .send(question)
        .end(verifyQuestion(done));
    });

    it('should return 401 if not authenticated', function(done) {
      var question = {
        questionText: 'A great question',
        Choices: [{ choiceText: 'Choice 1'}, { choiceText: 'Choice 2'}]
      };

      chai.request(server)
        .post('/questions')
        .send(question)
        .end(function(err, res) {
          expect(res.status).equal(401);
          done();
        });
    });
  });
});
