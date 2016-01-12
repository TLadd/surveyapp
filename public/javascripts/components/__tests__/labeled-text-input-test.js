jest.dontMock('../labeled-text-input');

const LabeledTextInput = require('../labeled-text-input');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('LabeledTextInput', () => {

  const renderComponent = function(options) {
    let props = _.extend({}, {
      label: 'Label',
      value: 'Input Value',
      onChange: jest.genMockFunction()
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(LabeledTextInput, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders the label', () => {
    const el = renderComponent();

    const label = TestUtils.findRenderedDOMComponentWithClass(el, 'survey-input-label');

    expect(label.textContent).toEqual('Label');
  });

  it('renders the text input with value', () => {
    const el = renderComponent({selected: false});

    const input = TestUtils.findRenderedDOMComponentWithTag(el, 'input');

    expect(input.value).toEqual('Input Value');
  });

  it('calls onChange when the text input changes value', function() {
    const el = renderComponent({selected: false});

    const input = TestUtils.findRenderedDOMComponentWithTag(el, 'input');
    TestUtils.Simulate.change(input);

    expect(el.props.onChange).toBeCalled();
  });
});
