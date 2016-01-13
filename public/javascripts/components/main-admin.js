const Link = require('react-router').Link;
const React = require('react');

class MainAdmin extends React.Component {

  render() {
    return (
      <div className="survey-admin">
        <h2 className="question-list-link">
          <Link to='/questions'>Question List</Link>
        </h2>
        <h2 className="question-new-link">
          <Link to='/questions/new'>New Question</Link>
        </h2>
      </div>
    );
  }
}

module.exports = MainAdmin;
