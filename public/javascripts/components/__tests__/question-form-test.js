jest.dontMock('../question-form');

const ChoiceEntry = require('../choice-entry');
const QuestionEntry = require('../question-entry');
const QuestionForm = require('../question-form');
const React = require('react');
const SubmitButton = require('../submit-button');
const TestUtils = require('react-addons-test-utils');
const _ = require('lodash');

describe('QuestionForm', () => {

  const renderComponent = function() {
    return TestUtils.renderIntoDocument(React.createElement(QuestionForm, {}));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders a Question Entry field', () => {
    const el = renderComponent();

    const question = TestUtils.findRenderedComponentWithType(el, QuestionEntry);
  });

  it('renders two ChoiceEntry fields', () => {
    const el = renderComponent();

    const choices = TestUtils.scryRenderedComponentsWithType(el, ChoiceEntry);

    expect(choices.length).toEqual(2);
  });

  it('renders an add choice button', () => {
    const el = renderComponent();

    const button = TestUtils.findRenderedDOMComponentWithTag(el, 'button');

    expect(button.textContent).toEqual('Add Choice');
  });

  it('renders a submit button', () => {
    const el = renderComponent();

    const submit = TestUtils.findRenderedComponentWithType(el, SubmitButton);
  });

  it('updates the question on question change', () => {
    const el = renderComponent();

    const question = TestUtils.findRenderedComponentWithType(el, QuestionEntry);
    question.props.onChange('Great Question');

    expect(question.props.value).toEqual('Great Question');
  });

  it('updates the choice on choice change', () => {
    const el = renderComponent();

    const choices = TestUtils.scryRenderedComponentsWithType(el, ChoiceEntry);
    choices[1].props.onChange('Great Choice');

    expect(choices[1].props.value).toEqual('Great Choice');
  });

  it('adds a new choice on add choice', () => {
    const el = renderComponent();

    const button = TestUtils.findRenderedDOMComponentWithTag(el, 'button');
    TestUtils.Simulate.click(button);
    const choices = TestUtils.scryRenderedComponentsWithType(el, ChoiceEntry);

    expect(choices.length).toEqual(3);
  });

  it('removes a choice on delete choice', () => {
    const el = renderComponent();

    let choices = TestUtils.scryRenderedComponentsWithType(el, ChoiceEntry);
    choices[0].props.onChange('Choice 0');
    choices[1].props.onChange('Choice 1');
    choices[0].props.onDelete();

    choices = TestUtils.scryRenderedComponentsWithType(el, ChoiceEntry);
    expect(choices.length).toEqual(1);
    expect(choices[0].props.value).toEqual('Choice 1');
  });

  it('should disable the submit button if the question is empty', function() {
    const el = renderComponent();

    const choices = TestUtils.scryRenderedComponentsWithType(el, ChoiceEntry);
    choices[0].props.onChange('Choice 0');
    choices[1].props.onChange('Choice 1');
    const submit = TestUtils.findRenderedComponentWithType(el, SubmitButton);

    expect(submit.props.disabled).toEqual(true);
  });

  it('should disable the submit button if a choice is empty', function() {
    const el = renderComponent();

    const question = TestUtils.findRenderedComponentWithType(el, QuestionEntry);
    const choices = TestUtils.scryRenderedComponentsWithType(el, ChoiceEntry);
    question.props.onChange('Question');
    choices[1].props.onChange('Choice 1');
    const submit = TestUtils.findRenderedComponentWithType(el, SubmitButton);

    expect(submit.props.disabled).toEqual(true);
  });

  it('should disable the submit button if there are no choices', function() {
    const el = renderComponent();

    const question = TestUtils.findRenderedComponentWithType(el, QuestionEntry);
    const choices = TestUtils.scryRenderedComponentsWithType(el, ChoiceEntry);
    question.props.onChange('Question');
    choices[1].props.onDelete();
    choices[0].props.onDelete();
    const submit = TestUtils.findRenderedComponentWithType(el, SubmitButton);

    expect(submit.props.disabled).toEqual(true);
  });

  it('should enable submit button if all form fields are filled', function() {
    const el = renderComponent();

    const question = TestUtils.findRenderedComponentWithType(el, QuestionEntry);
    const choices = TestUtils.scryRenderedComponentsWithType(el, ChoiceEntry);
    question.props.onChange('Question');
    choices[0].props.onChange('Choice 0');
    choices[1].props.onChange('Choice 1');
    const submit = TestUtils.findRenderedComponentWithType(el, SubmitButton);

    expect(submit.props.disabled).toEqual(false);
  });
});
