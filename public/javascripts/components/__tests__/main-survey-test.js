jest.dontMock('../main-survey');

const MainSurvey = require('../main-survey');
const QuestionActions = require('../../actions/question-actions');
const React = require('react');
const SurveyContainer = require('../survey-container');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('MainSurvey', () => {

  const renderComponent = function() {
    return TestUtils.renderIntoDocument(React.createElement(MainSurvey, {}));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders a Survey Container Component', () => {
    const el = renderComponent();

    TestUtils.findRenderedComponentWithType(el, SurveyContainer);
  });

  it('fetches a random question on load', () => {
    const el = renderComponent();

    expect(QuestionActions.getRandom).toBeCalled();
  });
});
