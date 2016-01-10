jest.dontMock('../choices');

const Choices = require('../choices');
const Choice = require('../choice');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('Choices', () => {

  const renderComponent = function(options) {
    let props = _.extend({}, {
      choices: [
        {
          id: 1,
          choiceText: 'choice 1',
        },
        {
          id: 2,
          choiceText: 'choice 2',
        }
      ],
      onClick: jest.genMockFunction(),
      selectedId: undefined
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(Choices, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders a choice component for each choice', () => {
    const el = renderComponent();

    const choices = TestUtils.scryRenderedComponentsWithType(el, Choice);

    expect(choices.length).toEqual(2);
  });

  it('render a selected choice for the specified id', () => {
    const el = renderComponent({selectedId: 1});

    const choices = TestUtils.scryRenderedComponentsWithType(el, Choice);

    expect(choices[0].props.selected).toEqual(true);
  });

  it('render a non-selected choice for choices that do not match the specified id', () => {
    const el = renderComponent({selectedId: 1});

    const choices = TestUtils.scryRenderedComponentsWithType(el, Choice);

    expect(choices[1].props.selected).toEqual(false);
  });
});
