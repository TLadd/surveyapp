const ChoiceStat = require('./choice-stat');
const React = require('react');
const _ = require('lodash');

class ChoiceStats extends React.Component {

  render() {
    const choices = _.map(this.props.choices, (choice, index) => {
      return (
        <ChoiceStat key={choice.id}
                    index={index}
                    choice={choice} />
      );
    });

    return (
      <div className="choice-stats">
        {choices}
      </div>
    );
  }
}

ChoiceStats.propTypes = {
  choices: React.PropTypes.array
}

module.exports = ChoiceStats;
