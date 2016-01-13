jest.dontMock('../choice-stats');

const ChoiceStat = require('../choice-stat');
const ChoiceStats = require('../choice-stats');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('ChoiceStats', () => {

  const renderComponent = function(options) {
    const props = _.extend({
      choices: [
        { id: 1, choiceText: 'Choice 1' },
        { id: 2, choiceText: 'Choice 2' }
      ]
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(ChoiceStats, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders a ChoiceStat for each choice', () => {
    const el = renderComponent();

    const stats = TestUtils.scryRenderedComponentsWithType(el, ChoiceStat);

    expect(stats.length).toEqual(2);
    expect(stats[0].props.choice).toEqual({ id: 1, choiceText: 'Choice 1' });
    expect(stats[1].props.choice).toEqual({ id: 2, choiceText: 'Choice 2' });
  });
});
