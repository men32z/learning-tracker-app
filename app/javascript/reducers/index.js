import { combineReducers } from 'redux';
import authReducer from './auth';
import subjectReducer from './subject';
import measurementReducer from './measurement';
import statisticsReducer from './statistics';
import measureReducer from './measure';

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer,
  measurement: measurementReducer,
  statistics: statisticsReducer,
  measure: measureReducer,
});

export default rootReducer;
