const React = require('react');

class Question extends React.Component {

  render() {
    return (
      <div className="survey-question">
        <h3 className="survey-question-text">{this.props.questionText}</h3>
      </div>
    );
  }
}

Question.propTypes = {
  questionText: React.PropTypes.string
}

module.exports = Question;
