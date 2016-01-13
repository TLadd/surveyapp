jest.dontMock('../choice-graph');

const BarChart = require('react-chartjs').Bar;
const ChoiceGraph = require('../choice-graph');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('ChoiceGraph', () => {

  const renderComponent = function(options) {
    const props = _.extend({
      choices: [{id: 1, numChosen: 2}, {id: 2, numChosen: 3}]
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(ChoiceGraph, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders a Bar graph', () => {
    const el = renderComponent();

    const graph = TestUtils.findRenderedComponentWithType(el, BarChart);

    expect(graph.props.data.labels).toEqual(['Choice 1', 'Choice 2']);
    expect(graph.props.data.datasets[0].data).toEqual([2, 3]);
  });
});
