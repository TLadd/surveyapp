const AppDispatcher = require('../dispatcher/app-dispatcher');
const QuestionContants = require('../constants/question-constants');
const $ = require('jquery');

const QuestionActions = {
  getRandom: function() {
    return $.ajax({
      url: '/questions/random',
      type: 'GET',
      dataType: 'json',

      success: function(data) {
        AppDispatcher.handleServerAction({
          type: QuestionContants.QUESTION_RANDOM_COMPLETE,
          question: data
        });
      },

      beforeSend: function() {
        AppDispatcher.handleServerAction({
          type: QuestionContants.QUESTION_RANDOM,
        });
      },

      error: function() {
        AppDispatcher.handleServerAction({
          type: QuestionContants.QUESTION_RANDOM_ERROR,
        });
      }
    });
  }
}

module.exports = QuestionActions;
