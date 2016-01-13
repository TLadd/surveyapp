const AdminQuestionList = require('./components/admin-question-list');
const AdminQuestion = require('./components/admin-question');
const MainAdmin = require('./components/main-admin');
const QuestionForm = require('./components/question-form');
/*eslint-disable */
const React = require('react');
/*eslint-enable */
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainAdmin}/>
    <Route path="/questions" component={AdminQuestionList}/>
    <Route path="/questions/new" component={QuestionForm}/>
    <Route path="/questions/:id" component={AdminQuestion}/>
  </Router>,
  document.getElementById('survey-admin')
);
