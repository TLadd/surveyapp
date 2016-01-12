jest.dontMock('../question-entry');

const LabeledTextInput = require('../labeled-text-input');
const QuestionEntry = require('../question-entry');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('QuestionEntry', () => {

  const renderComponent = function(options) {
    let props = _.extend({}, {
      value: 'value'
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(QuestionEntry, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders a LabeledTextInput', () => {
    const el = renderComponent();

    const input = TestUtils.findRenderedComponentWithType(el, LabeledTextInput);

    expect(input.props.label).toEqual('Question');
    expect(el.props.value).toEqual(input.props.value);
  });
});
