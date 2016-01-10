const AppDispatcher = require('../dispatcher/app-dispatcher');
const QuestionContants = require('../constants/question-constants');
const ReduceStore = require('flux/utils').ReduceStore;

class QuestionStore extends ReduceStore {
  getInitialState() {
    return null;
  }

  reduce(state, action) {
    switch (action.type) {
      case QuestionContants.QUESTION_RANDOM_COMPLETE:
        return action.question;

      case QuestionContants.QUESTION_RANDOM:
        return null;

      default:
        return state;
    }
  }
}

const instance = new QuestionStore(AppDispatcher);
module.exports = instance;
