const React = require('react');

class SubmitButton extends React.Component {

  render() {
    return (
      <button className="btn btn-primary"
              disabled={this.props.disabled}
              onClick={this.props.onSubmit}>
        Submit
      </button>
    );
  }
}

SubmitButton.propTypes = {
  onSubmit: React.PropTypes.func,
  disabled: React.PropTypes.bool
}

module.exports = SubmitButton;
