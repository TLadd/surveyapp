import {Container} from 'flux/utils';
import Question from './question';
import Choices from './choices';
import React from 'react';
import SubmitButton from './submit-button';
import _ from 'lodash';

class Survey extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedId: undefined,
      submitEnabled: false
    };

    _.bindAll(this, ['onChoose', 'onSubmit']);
  }

  render() {
    if(!this.props.question) {
      return null;
    }

    return (
      <div className="survey">
        <Question questionText={this.props.question.questionText}/>
        <Choices  choices={this.props.question.Choices}
                  onClick={this.onChoose}
                  selectedId={this.state.selectedId} />
        <SubmitButton onSubmit={this.onSubmit}
                      disabled={!this.state.submitEnabled} />
      </div>
    );
  }

  onChoose(id) {
    this.setState({
      selectedId: id,
      submitEnabled: true
    });
  }

  onSubmit() {
    console.log('submit me');
  }
}

Survey.propTypes = {
  question: React.PropTypes.object
}

export default Survey;
