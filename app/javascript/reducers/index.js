import { combineReducers } from 'redux';
import authReducer from './auth';
import subjectReducer from './subject';
import measurementReducer from './measurement';

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer,
  measurement: measurementReducer,
});

export default rootReducer;
