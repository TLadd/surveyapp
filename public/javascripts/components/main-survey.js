const QuestionActions = require('../actions/question-actions');
const React = require('react');
const SurveyContainer = require('./survey-container');

class MainSurvey extends React.Component {

  componentDidMount() {
    QuestionActions.getRandom();
  }

  render() {
    return (
      <div className="survey-main">
        <SurveyContainer />
      </div>
    );
  }
}

module.exports = MainSurvey;
