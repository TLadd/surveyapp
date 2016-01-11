const Link = require('react-router').Link;
const Question = require('./question');
const React = require('react');
const _ = require('lodash');

class QuestionList extends React.Component {

  render() {
    const questions = _.map(this.props.questions, question => {
      return (
        <Link key={question.id} to={`/question/${question.id}`}>
          <Question questionText={question.questionText} />
        </Link>
      );
    });

    return (
      <div className="question-list">
        {questions}
      </div>
    );
  }
}

QuestionList.propTypes = {
  questions: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = QuestionList;
