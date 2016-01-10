const React = require('react');

class Question extends React.Component {

  render() {
    return (
      <div className="survey-question">
        <span className="survey-question-text">{this.props.questionText}</span>
      </div>
    );
  }
}

Question.propTypes = {
  questionText: React.PropTypes.string
}

module.exports = Question;
