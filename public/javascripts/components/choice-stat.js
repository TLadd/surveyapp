const React = require('react');
const _ = require('lodash');

class ChoiceStat extends React.Component {

  render() {
    return (
      <div className="choice-stat">
        <div className="choice-label">{"Choice " + (this.props.index + 1)}</div>
        <div className="choice-text">{this.props.choice.choiceText}</div>
        <div className="choice-count">{"Frequency: " + this.props.choice.numChosen}</div>
      </div>
    );
  }
}

ChoiceStat.propTypes = {
  choice: React.PropTypes.object,
  index: React.PropTypes.number
}

module.exports = ChoiceStat;
