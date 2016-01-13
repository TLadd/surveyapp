const Choices = require('./choices');
const NoMoreQuestions = require('./no-more-questions');
const Question = require('./question');
const QuestionActions = require('../actions/question-actions');
const React = require('react');
const ResponseActions = require('../actions/response-actions');
const SubmitButton = require('./submit-button');
const _ = require('lodash');

class Survey extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedId: undefined,
      submitEnabled: false
    };

    _.bindAll(this, ['onChoose', 'onSubmit']);
  }

  render() {
    if(_.isNull(this.props.question)) {
      return null;
    } else if(_.isEmpty(this.props.question)) {
      return (
        <NoMoreQuestions/>
      );
    }

    return (
      <div className="survey">
        <Question questionText={this.props.question.questionText}/>
        <Choices  choices={this.props.question.Choices}
                  onClick={this.onChoose}
                  selectedId={this.state.selectedId} />
        <SubmitButton onSubmit={this.onSubmit}
                      disabled={!this.state.submitEnabled} />
      </div>
    );
  }

  onChoose(id) {
    this.setState({
      selectedId: id,
      submitEnabled: true
    });
  }

  onSubmit() {
    this.setState({
      submitEnabled: false
    });

    ResponseActions.submitResponse(this.props.question.id, this.state.selectedId).
      then(() => {
        this.setState({
          selectedId: undefined
        });
        QuestionActions.getRandom();
      });
  }
}

Survey.propTypes = {
  question: React.PropTypes.object
}

module.exports = Survey;
