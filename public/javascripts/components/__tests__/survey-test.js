jest.dontMock('../survey');

const Choices = require('../choices');
const NoMoreQuestions = require('../no-more-questions');
const Question = require('../question');
const QuestionActions = require('../../actions/question-actions');
const React = require('react');
const ResponseActions = require('../../actions/response-actions');
const SubmitButton = require('../submit-button');
const Survey = require('../survey');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');
const $ = require('jquery');

describe('Survey', () => {

  const renderComponent = function(options) {
    let props = _.extend({}, {
      question: {
        id: 1,
        questionText: 'Question',
        Choices: [
          {
            id: 1,
            choiceText: 'choice 1'
          },
          {
            id: 1,
            choiceText: 'choice 2'
          }
        ]
      }
    }, options);

    return TestUtils.renderIntoDocument(React.createElement(Survey, props));
  };

  it('renders the Survey component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders the Question component', () => {
    const el = renderComponent();

    TestUtils.findRenderedComponentWithType(el, Question);
  });

  it('renders the Choices Component', () => {
    const el = renderComponent();

    TestUtils.findRenderedComponentWithType(el, Choices);
  });

  it('renders the SubmitButton Component', () => {
    const el = renderComponent();

    TestUtils.findRenderedComponentWithType(el, SubmitButton);
  });

  it('should render the SubmitButton disabled initially', () => {
    const el = renderComponent();

    const submit = TestUtils.findRenderedComponentWithType(el, SubmitButton);

    expect(submit.props.disabled).toEqual(true);
  });

  it('should render the SubmitButton after a choice is selected', () => {
    const el = renderComponent();

    const submit = TestUtils.findRenderedComponentWithType(el, SubmitButton);
    const choices = TestUtils.findRenderedComponentWithType(el, Choices);
    choices.props.onClick(1);

    expect(submit.props.disabled).toEqual(false);
    expect(choices.props.selectedId).toEqual(1);
  });

  it('should render a NoMoreQuestions component if there are no mroe questions', () => {
    const el = renderComponent({question: {}});

    TestUtils.findRenderedComponentWithType(el, NoMoreQuestions);
  });

  it('should submit a response and on submit', () => {
    const promise = $.Deferred();
    ResponseActions.submitResponse.mockReturnValue(promise);
    const el = renderComponent();

    const submit = TestUtils.findRenderedComponentWithType(el, SubmitButton);
    const choices = TestUtils.findRenderedComponentWithType(el, Choices);
    choices.props.onClick(2);
    submit.props.onSubmit();
    promise.resolve();

    expect(ResponseActions.submitResponse).toBeCalledWith(1, 2);
  });

  it('should get a new random quesiton on submit', () => {
    const promise = $.Deferred();
    ResponseActions.submitResponse.mockReturnValue(promise);
    const el = renderComponent();

    const submit = TestUtils.findRenderedComponentWithType(el, SubmitButton);
    const choices = TestUtils.findRenderedComponentWithType(el, Choices);
    choices.props.onClick(2);
    submit.props.onSubmit();
    promise.resolve();

    expect(QuestionActions.getRandom).toBeCalled();
  });
});
