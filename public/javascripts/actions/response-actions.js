const AppDispatcher = require('../dispatcher/app-dispatcher');
const ResponseConstants = require('../constants/response-constants');
const $ = require('jquery');

const ResponseActions = {
  submitResponse: function(questionId, choiceId) {
    return $.ajax({
      url: '/responses/',
      type: 'POST',
      dataType: 'json',
      data: {
        questionId: questionId,
        choiceId: choiceId
      },

      success: function(data) {
        AppDispatcher.handleServerAction({
          type: ResponseConstants.RESPONSE_SUBMIT_COMPLETE,
          response: data
        });
      },

      beforeSend: function() {
        AppDispatcher.handleServerAction({
          type: ResponseConstants.RESPONSE_SUBMIT,
        });
      },

      error: function() {
        AppDispatcher.handleServerAction({
          type: ResponseConstants.RESPONSE_SUBMIT_ERROR,
        });
      }
    });
  }
};

module.exports = ResponseActions;
