jest.dontMock('../no-more-questions');

const NoMoreQuestions = require('../no-more-questions');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

describe('NoMoreQuestions', () => {

  const renderComponent = function(options) {
    return TestUtils.renderIntoDocument(React.createElement(NoMoreQuestions, {}));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('informs the user there are no more questions', () => {
    const el = renderComponent();

    const noMore = TestUtils.findRenderedDOMComponentWithClass(el, 'no-more-questions');

    expect(noMore.textContent).toEqual('You have answered all the questions!');
  });
});
