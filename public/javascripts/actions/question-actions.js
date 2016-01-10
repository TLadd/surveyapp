import AppDispatcher from '../dispatcher/app-dispatcher';
import QuestionContants from '../constants/question-constants';
import $ from 'jquery';

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

export default QuestionActions;
