import { combineReducers } from 'redux';
import authReducer from './auth';
import subjectReducer from './subject';

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer,
});

export default rootReducer;
