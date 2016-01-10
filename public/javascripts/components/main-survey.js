import QuestionActions from '../actions/question-actions';
import React from 'react';
import SurveyContainer from './survey-container';

export default class MainSurvey extends React.Component {

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
