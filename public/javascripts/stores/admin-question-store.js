const AppDispatcher = require('../dispatcher/app-dispatcher');
const QuestionConstants = require('../constants/question-constants');
const ReduceStore = require('flux/utils').ReduceStore;
const _ = require('lodash');

class AdminQuestionStore extends ReduceStore {
  getInitialState() {
    return null;
  }

  reduce(state, action) {
    switch (action.type) {
      case QuestionConstants.QUESTION_ALL_LOAD_COMPLETE:
        return action.questions;

      case QuestionConstants.QUESTION_LOAD_COMPLETE:
        return [action.question];

      default:
        return state;
    }
  }

  hasQuestion(id) {
    return _.any(this.getState(), question => question.id === parseInt(id));
  }

  getQuestion(id) {
    return _.find(this.getState(), question => question.id === parseInt(id));
  }
}

const instance = new AdminQuestionStore(AppDispatcher);
module.exports = instance;
