const Link = require('react-router').Link;
const React = require('react');

class MainAdmin extends React.Component {

  render() {
    return (
      <div className="survey-admin">
        <div className="question-list-link">
          <Link to='/questions'>Question List</Link>
        </div>
        <div className="question-new-link">
          <Link to='/questions/new'>New Question</Link>
        </div>
      </div>
    );
  }
}

module.exports = MainAdmin;
