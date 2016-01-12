jest.dontMock('../submit-button');

const React = require('react');
const SubmitButton = require('../submit-button');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('SubmitButton', () => {

  const renderComponent = function(options) {
    let props = _.extend({}, {
      onSubmit: jest.genMockFunction(),
      disabled: false
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(SubmitButton, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders a submit button', () => {
    const el = renderComponent();

    const button = TestUtils.findRenderedDOMComponentWithTag(el, 'input');

    expect(button.type).toEqual('button');
    expect(button.value).toEqual('Submit');
    expect(button.disabled).toEqual(false);
  });

  it('renders a disabled submit button', () => {
    const el = renderComponent({disabled: true});

    const button = TestUtils.findRenderedDOMComponentWithTag(el, 'input');

    expect(button.disabled).toEqual(true);
  });

  it('calls onSubmit when the button is clicked', () => {
    const el = renderComponent({disabled: true});

    const button = TestUtils.findRenderedDOMComponentWithTag(el, 'input');
    TestUtils.Simulate.click(button);

    expect(el.props.onSubmit).toBeCalled();
  });
});
