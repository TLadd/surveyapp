import classNames from 'classnames';
import React from 'react';
import _ from 'lodash';

class Choice extends React.Component {

  constructor(props) {
    super(props);

    _.bindAll(this, 'onClick');
  }

  render() {
    const classes = classNames({
      'survey-choice': true,
      'survey-choice-selected': this.props.selected
    });

    return (
      <div className={classes} onClick={this.onClick}>
        <span>{this.props.choice.choiceText}</span>
      </div>
    );
  }

  onClick() {
    this.props.onClick(this.props.choice.id);
  }
}

Choice.propTypes = {
  choice: React.PropTypes.object,
  onClick: React.PropTypes.func,
  selected: React.PropTypes.bool
}

export default Choice;
