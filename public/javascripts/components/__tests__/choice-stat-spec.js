jest.dontMock('../choice-stat');

const ChoiceStat = require('../choice-stat');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('ChoiceStat', () => {

  const renderComponent = function(options) {
    const props = _.extend({
      choice: {
        id: 1,
        choiceText: 'A Great Choice',
        numChosen: 3
      },
      index: 1
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(ChoiceStat, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders the choice label', () => {
    const el = renderComponent();

    const choiceLabel = TestUtils.findRenderedDOMComponentWithClass(el, 'choice-label');

    expect(choiceLabel.textContent).toEqual('Choice 2');
  });

  it('renders the choice text', () => {
    const el = renderComponent();

    const choiceText = TestUtils.findRenderedDOMComponentWithClass(el, 'choice-text');

    expect(choiceText.textContent).toEqual('A Great Choice');
  });

  it('renders the number of times chosen', () => {
    const el = renderComponent();

    const numChosen = TestUtils.findRenderedDOMComponentWithClass(el, 'choice-count');

    expect(numChosen.textContent).toEqual('Frequency: 3');
  });
});
