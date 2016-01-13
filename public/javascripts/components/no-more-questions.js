const React = require('react');

class NoMoreQuestions extends React.Component {

  render() {
    return (
      <h2 className="no-more-questions">
        You have answered all the questions!
      </h2>
    );
  }
}

module.exports = NoMoreQuestions;
