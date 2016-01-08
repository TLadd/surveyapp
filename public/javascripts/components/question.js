let React = require('react'),
    ReactDOM = require('react-dom');

class Question extends React.Component {

  render() {
    return (
      <div className="survey-question">
        <h1>Smelly things</h1>
      </div>
    );
  }
}

module.exports = Question;
