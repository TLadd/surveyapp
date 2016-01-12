const AppDispatcher = require('../dispatcher/app-dispatcher');
const QuestionConstants = require('../constants/question-constants');
const ReduceStore = require('flux/utils').ReduceStore;

class AdminQuestionStore extends ReduceStore {
  getInitialState() {
    return null;
  }

  reduce(state, action) {
    switch (action.type) {
      case QuestionConstants.QUESTION_ALL_LOAD_COMPLETE:
        return action.questions;

      case QuestionConstants.QUESTION_ALL_LOAD:
        return null;

      default:
        return state;
    }
  }
}

const instance = new AdminQuestionStore(AppDispatcher);
module.exports = instance;
