const React = require('react');
const _ = require('lodash');

class LabeledTextInput extends React.Component {

  constructor(props) {
    super(props);

    _.bindAll(this, 'onChange');
  }

  render() {

    return (
      <div className="survey-labeled-text-input">
        <h4 className="survey-input-label">{this.props.label}</h4>
        <input  type="text"
                className="form-control"
                value={this.props.value}
                onChange={this.onChange} />
      </div>
    );
  }

  onChange(e) {
    if(this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }
}

LabeledTextInput.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
}

module.exports = LabeledTextInput;
