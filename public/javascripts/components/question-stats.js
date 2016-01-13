const ChoiceGraph = require('./choice-graph');
const ChoiceStats = require('./choice-stats');
const Question = require('./question');
const React = require('react');

class QuestionStats extends React.Component {

  render() {
    return (
      <div className="question-stats">
        <Question questionText={this.props.question.questionText} />
        <ChoiceGraph choices={this.props.question.Choices} />
        <ChoiceStats choices={this.props.question.Choices} />
      </div>
    );
  }
}

ChoiceGraph.propTypes = {
  question: React.PropTypes.object
}

module.exports = QuestionStats;
