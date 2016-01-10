const Dispatcher = require('flux').Dispatcher;

const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
  if (console) {
    console.log('survey (ui) (%s): %o', action.type, action);
  }
  this.dispatch(action);
};

AppDispatcher.handleServerAction = function(action) {
  if (console) {
    console.log('survey (%s): %o', action.type, action);
  }
  this.dispatch(action);
};

module.exports = AppDispatcher;
