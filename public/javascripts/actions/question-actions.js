const AppDispatcher = require('../dispatcher/app-dispatcher');
const QuestionConstants = require('../constants/question-constants');
const $ = require('jquery');
const _ = require('lodash');

const QuestionActions = {
  getRandom: function() {
    return $.ajax({
      url: '/questions/random',
      type: 'GET',
      dataType: 'json',

      success: function(data) {
        AppDispatcher.handleServerAction({
          type: QuestionConstants.QUESTION_RANDOM_COMPLETE,
          question: data
        });
      },

      beforeSend: function() {
        AppDispatcher.handleServerAction({
          type: QuestionConstants.QUESTION_RANDOM,
        });
      },

      error: function() {
        AppDispatcher.handleServerAction({
          type: QuestionConstants.QUESTION_RANDOM_ERROR,
        });
      }
    });
  },

  getAll: function() {
    return $.ajax({
      url: '/questions',
      type: 'GET',
      dataType: 'json',

      success: function(data) {
        AppDispatcher.handleServerAction({
          type: QuestionConstants.QUESTION_ALL_LOAD_COMPLETE,
          questions: data
        });
      },

      beforeSend: function() {
        AppDispatcher.handleServerAction({
          type: QuestionConstants.QUESTION_ALL_LOAD,
        });
      },

      error: function() {
        AppDispatcher.handleServerAction({
          type: QuestionConstants.QUESTION_ALL_LOAD_ERROR,
        });
      }
    });
  },

  createQuestion: function(questionText, choices) {
    const choiceObjects = _.map(choices, choice => ({choiceText: choice}));
    return $.ajax({
      url: '/questions/',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        questionText: questionText,
        Choices: choiceObjects
      }),

      success: function(data) {
        AppDispatcher.handleServerAction({
          type: QuestionConstants.QUESTION_SUBMIT_COMPLETE,
          response: data
        });
      },

      beforeSend: function() {
        AppDispatcher.handleServerAction({
          type: QuestionConstants.QUESTION_SUBMIT,
        });
      },

      error: function() {
        AppDispatcher.handleServerAction({
          type: QuestionConstants.QUESTION_SUBMIT_ERROR,
        });
      }
    });
  }
};

module.exports = QuestionActions;
