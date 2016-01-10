import {Dispatcher} from 'flux';

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

export default AppDispatcher;
