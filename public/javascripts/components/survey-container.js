const Container = require('flux/utils').Container;
const QuestionStore = require('../stores/question-store');
const React = require('react');
const Survey = require('./survey');

class SurveyContainer extends React.Component {
  static getStores() {
    return [QuestionStore];
  }

  static calculateState() {
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
module.exports = container;
