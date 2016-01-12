jest.dontMock('../choice-entry');

const LabeledTextInput = require('../labeled-text-input');
const ChoiceEntry = require('../choice-entry');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('ChoiceEntry', () => {

  const renderComponent = function(options) {
    let props = _.extend({}, {
      value: 'value',
      onDelete: jest.genMockFunction(),
      index: 0
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(ChoiceEntry, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders a LabeledTextInput', () => {
    const el = renderComponent();

    const input = TestUtils.findRenderedComponentWithType(el, LabeledTextInput);

    expect(input.props.label).toEqual('Choice 1');
    expect(el.props.value).toEqual(input.props.value);
  });

  it('renders a delete button', () => {
    const el = renderComponent();

    const button = TestUtils.findRenderedDOMComponentWithTag(el, 'button');
    TestUtils.Simulate.click(button);

    expect(el.props.onDelete).toBeCalled();
  });
});
