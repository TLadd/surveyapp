import {Container} from 'flux/utils';
import QuestionStore from '../stores/question-store';
import React from 'react';
import Survey from './survey';

class SurveyContainer extends React.Component {
  static getStores() {
    return [QuestionStore];
  }

  static calculateState(prevState) {
    return {
      question: QuestionStore.getState(),
    };
  }

  render() {
    return (
      <div className="survey-container">
        <Survey question={this.state.question} />
      </div>
    );
  }
}

const container = Container.create(SurveyContainer);
export default container;
