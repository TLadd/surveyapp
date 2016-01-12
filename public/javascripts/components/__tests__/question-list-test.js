jest.dontMock('../question-list');

const Link = require('react-router').Link;
const Question = require('../question');
const QuestionList = require('../question-list');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('QuestionList', () => {

  const renderComponent = function(options) {
    let props = _.extend({}, {
      questions: [
        {
          id: 1,
          questionText: 'question 1',
        },
        {
          id: 2,
          questionText: 'question 2',
        }
      ]
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(QuestionList, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders a Link for each question', () => {
    const el = renderComponent();

    const links = TestUtils.scryRenderedComponentsWithType(el, Link);

    expect(links.length).toEqual(2);
    expect(links[0].props.to).toEqual('/questions/1');
    expect(links[1].props.to).toEqual('/questions/2');

  });

  it('render a Quetion component for each question', () => {
    const el = renderComponent();

    const questions = TestUtils.scryRenderedComponentsWithType(el, Question);

    expect(questions.length).toEqual(2);
  });
});
