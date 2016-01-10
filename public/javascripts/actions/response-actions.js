import AppDispatcher from '../dispatcher/app-dispatcher';
import ResponseContants from '../constants/response-constants';
import $ from 'jquery';

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
          type: ResponseContants.RESPONSE_SUBMIT_COMPLETE,
          response: data
        });
      },

      beforeSend: function() {
        AppDispatcher.handleServerAction({
          type: ResponseContants.RESPONSE_SUBMIT,
        });
      },

      error: function() {
        AppDispatcher.handleServerAction({
          type: QuestionContants.RESPONSE_SUBMIT_ERROR,
        });
      }
    });
  }
}

export default ResponseActions;
