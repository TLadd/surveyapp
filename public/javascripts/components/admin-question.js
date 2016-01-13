const AdminQuestionStore = require('../stores/admin-question-store');
const Container = require('flux/utils').Container;
const QuestionActions = require('../actions/question-actions');
const QuestionStats = require('./question-stats');
const React = require('react');

class AdminQuestion extends React.Component {
  static getStores() {
    return [AdminQuestionStore];
  }

  static calculateState(prevState, props) {
    return {
      question: AdminQuestionStore.getQuestion(props.params.id)
    };
  }

  componentDidMount() {
    if(!AdminQuestionStore.hasQuestion(this.props.params.id)) {
      QuestionActions.getQuestion(this.props.params.id);
    }
  }

  render() {
    if(!this.state.question) {
      return null;
    }

    return (
      <div className="admin-question">
        <QuestionStats question={this.state.question} />
      </div>
    );
  }
}

const container = Container.create(AdminQuestion, {withProps: true});
module.exports = container;
