jest.dontMock('../question');

const Question = require('../question');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('Question', () => {

  const renderComponent = function(options) {
    let props = _.extend({}, {
      questionText: 'Question'
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(Question, props));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders the question text', () => {
    const el = renderComponent();

    const questionText = TestUtils.findRenderedDOMComponentWithClass(el, "survey-question-text");

    expect(questionText.textContent).toEqual('Question');
  });
});
