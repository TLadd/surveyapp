jest.dontMock('../question-stats');

const ChoiceGraph = require('../choice-graph');
const ChoiceStats = require('../choice-stats');
const Question = require('../question');
const QuestionStats = require('../question-stats');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('QuestionStats', () => {
  const choices = [
    {id: 1, choiceText: 'Choice 1'},
    {id: 1, choiceText: 'Choice 2'}
  ]

  const renderComponent = function(options) {
    const props = _.extend({
      question: {
        id: 1,
        questionText: 'Question',
        Choices: choices
      }
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(QuestionStats, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders the Question', () => {
    const el = renderComponent();

    const question = TestUtils.findRenderedComponentWithType(el, Question);

    expect(question.props.questionText).toEqual(el.props.question.questionText);
  });

  it('renders the ChoiceGraph', () => {
    const el = renderComponent();

    const graph = TestUtils.findRenderedComponentWithType(el, ChoiceGraph);

    expect(graph.props.choices).toEqual(el.props.question.Choices);
  });

  it('renders the ChoiceStats', () => {
    const el = renderComponent();

    const stats = TestUtils.findRenderedComponentWithType(el, ChoiceStats);

    expect(stats.props.choices).toEqual(el.props.question.Choices);
  });
});
