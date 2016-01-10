import React from 'react';

class Question extends React.Component {

  render() {
    return (
      <div className="survey-question">
        <span>{this.props.questionText}</span>
      </div>
    );
  }
}

Question.propTypes = {
  questionText: React.PropTypes.string
}

export default Question;
