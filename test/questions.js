var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var expect = chai.expect;
var models = require('../models');
var Sequelize = require('sequelize');
var Question = models.Question;
var Choice = models.Choice;


chai.use(chaiHttp);

describe('Questions', function() {
  it('should return a random question on /questions/random GET', function(done) {
    models.sequelize.sync({force: true}).then(function() {


    Question.create({
      questionText: 'A great question',
      Choices: [
        { choiceText: 'Choice 1'},
        { choiceText: 'Choice 2'}
      ]
    }, {
      include: [ Choice ]
    });

    chai.request(server)
      .get('/questions/random')
      .end(function(err, res) {
        expect(res.status).equal(200);
        expect(res.body.questionText).equal('A great question');
        expect(res.body.Choices.length).equal(2);
        choiceTexts = [res.body.Choices[0].choiceText, res.body.Choices[1].choiceText];
        expect(choiceTexts).to.include('Choice 1');
        expect(choiceTexts).to.include('Choice 2');
        done();
      });
    });

  });

});
