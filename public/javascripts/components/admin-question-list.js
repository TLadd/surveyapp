const AdminQuestionStore = require('../stores/admin-question-store');
const Container = require('flux/utils').Container;
const QuestionActions = require('../actions/question-actions');
const QuestionList = require('./question-list');
const React = require('react');

class AdminQuestionList extends React.Component {
  static getStores() {
    return [AdminQuestionStore];
  }

  static calculateState() {
    return {
      questions: AdminQuestionStore.getState(),
    };
  }

  componentDidMount() {
    QuestionActions.getAll();
  }

  render() {
    return (
      <div className="admin-question-list">
        <QuestionList questions={this.state.questions} />
      </div>
    );
  }
}

const container = Container.create(AdminQuestionList);
module.exports = container;
