import AppDispatcher from '../dispatcher/app-dispatcher';
import QuestionContants from '../constants/question-constants';
import {ReduceStore} from 'flux/utils';

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
export default instance;
