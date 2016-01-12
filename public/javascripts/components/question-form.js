const ChoiceEntry = require('./choice-entry');
const LabeledTextInput = require('./labeled-text-input');
const QuestionActions = require('../actions/question-actions');
const QuestionEntry = require('./question-entry');
const React = require('react');
const SubmitButton = require('./submit-button');
const update = require('react-addons-update');
const _ = require('lodash');

class QuestionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.default = {
      questionText: "",
      choices: ["", ""]
    };

    _.bindAll(this, 'onDeleteChoice',
                    'onAddChoice',
                    'isStateValid',
                    'onQuestionChange',
                    'onChoiceChange',
                    'onSubmit');
  }

  render() {

    const choices = _.map(this.state.choices, (choice, index) => {
      return (
        <div className="form-group" key={index}>
          <ChoiceEntry  value={choice}
                        onDelete={() => this.onDeleteChoice(index)}
                        onChange={(text) => this.onChoiceChange(text, index)}
                        index={index} />
        </div>
      );
    });

    return (
      <div className="question-form">
        <div className="form-group">
          <QuestionEntry  value={this.state.questionText}
                          onChange={this.onQuestionChange} />
        </div>
        {choices}
        <button onClick={this.onAddChoice}>Add Choice</button>
        <SubmitButton onSubmit={this.onSubmit}
                      disabled={!this.isStateValid()} />
      </div>
    );
  }

  onSubmit() {
    QuestionActions.createQuestion(this.state.questionText, this.state.choices)
      .then(() => this.setState(this.default));
  }

  onQuestionChange(text) {
    this.setState({
      questionText: text
    });
  }

  onChoiceChange(text, index) {
    let currentChoices = this.state.choices.slice();
    currentChoices[index] = text;

    this.setState({
      choices: currentChoices
    });
  }

  onDeleteChoice(index) {
    this.setState({
      choices: _.filter(this.state.choices, (choice, i) => index != i)
    });
  }

  onAddChoice() {
    this.setState({
      choices: update(this.state.choices, {$push: [""]})
    });
  }

  isStateValid() {
    const nonEmpty = (s) => s !== "";
    const question = this.state.questionText;
    const choices = this.state.choices;

    return choices.length > 0 && nonEmpty(question) && _.all(choices, nonEmpty);
  }
}


module.exports = QuestionForm;
