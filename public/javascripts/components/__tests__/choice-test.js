jest.dontMock('../choice');

const Choice = require('../choice');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('Choice', () => {

  const renderComponent = function(options) {
    let props = _.extend({}, {
      choice: {
        id: 1,
        choiceText: 'choice',
      },
      onClick: jest.genMockFunction(),
      selected: false
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(Choice, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders the choice text', () => {
    const el = renderComponent();

    const choiceText = TestUtils.findRenderedDOMComponentWithClass(el, 'survey-choice-text');

    expect(choiceText.textContent).toEqual('choice');
  });

  it('renders the choice as not selected if it is not a selected choice', () => {
    const el = renderComponent({selected: false});

    const selected = TestUtils.scryRenderedDOMComponentsWithClass(el, 'survey-choice-selected');

    expect(selected.length).toEqual(0);
  });

  it('renders the choice as selected if it is a selected choice', () => {
    const el = renderComponent({selected: true});

    TestUtils.findRenderedDOMComponentWithClass(el, 'survey-choice-selected');
  });

});
