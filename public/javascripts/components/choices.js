import Choice from './choice'
import React from 'react';
let _ = require('lodash');

class Choices extends React.Component {

  render() {
    const choices = _.map(this.props.choices, choice => {
      return (
        <Choice key={choice.id}
                choice={choice}
                onClick={this.props.onClick}
                selected={this.props.selectedId === choice.id} />
      );
    });

    return (
      <div className="survey-choices">
        {choices}
      </div>
    );
  }
}

Choices.propTypes = {
  choices: React.PropTypes.arrayOf(React.PropTypes.object),
  onClick: React.PropTypes.func,
  selectedId: React.PropTypes.number
}

export default Choices;
