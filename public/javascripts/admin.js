const AdminQuestionList = require('./components/admin-question-list');
const AdminQuestion = require('./components/admin-question');
const MainAdmin = require('./components/main-admin');
const MainAdmin2 = require('./components/main-admin2');
const QuestionForm = require('./components/question-form');
const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const SubmitButton = require('./components/submit-button');
const browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainAdmin}/>
    <Route path="/questions" component={AdminQuestionList}/>
  </Router>,
  document.getElementById('survey-admin')
);


//<Route path="/questions/:id" component={AdminQuestion}/>
//<Route path="/questions/new" component={QuestionForm}/>
