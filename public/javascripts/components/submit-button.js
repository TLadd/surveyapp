const React = require('react');

class SubmitButton extends React.Component {

  render() {
    return (
      <div className="submit-button">
        <input  type="button"
                value="Submit"
                disabled={this.props.disabled}
                onClick={this.props.onSubmit} />
      </div>
    );
  }

  onClick() {
    console.log("WHATOGJREOJGEROG");
  }
}

SubmitButton.propTypes = {
  onSubmit: React.PropTypes.func,
  disabled: React.PropTypes.bool
}

module.exports = SubmitButton;
