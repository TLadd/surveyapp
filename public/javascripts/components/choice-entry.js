const LabeledTextInput = require('./labeled-text-input');
const React = require('react');

class ChoiceEntry extends React.Component {

  render() {
    return (
      <div className="choice-entry">
        <LabeledTextInput label={"Choice " + (this.props.index + 1)}
                          value={this.props.value}
                          onChange={this.props.onChange} />
                        <button className="btn btn-danger" onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

ChoiceEntry.propTypes = {
  value: React.PropTypes.string,
  onDelete: React.PropTypes.func,
  onChange: React.PropTypes.func,
  index: React.PropTypes.number
}

module.exports = ChoiceEntry;
