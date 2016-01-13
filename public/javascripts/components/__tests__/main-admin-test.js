jest.dontMock('../main-admin');

const Link = require('react-router').Link;
const MainAdmin = require('../main-admin');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

describe('MainAdmin', () => {

  const renderComponent = function() {
    return TestUtils.renderIntoDocument(React.createElement(MainAdmin, {}));
  };

  it('renders the component', () => {
    const el = renderComponent();

    expect(el).toBeTruthy();
  });

  it('renders a link to the question list', () => {
    const el = renderComponent();

    const links = TestUtils.scryRenderedComponentsWithType(el, Link);

    expect(links[0].props.to).toEqual('/questions');
  });

  it('renders a link to the create new question form', () => {
    const el = renderComponent();

    const links = TestUtils.scryRenderedComponentsWithType(el, Link);

    expect(links[1].props.to).toEqual('/questions/new');
  });
});
