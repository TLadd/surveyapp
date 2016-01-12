const LabeledTextInput = require('./labeled-text-input');
const React = require('react');

class QuestionEntry extends React.Component {

  render() {
    return (
      <div className="question-entry">
        <LabeledTextInput label="Question"
                          onChange={this.props.onChange}
                          value={this.props.value} />
      </div>
    );
  }
}

QuestionEntry.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
}

module.exports = QuestionEntry;
