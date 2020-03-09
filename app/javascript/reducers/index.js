import { combineReducers } from 'redux';
import authReducer from './auth';
import subjectReducer from './subject';
import measurementReducer from './measurement';
import statisticsReducer from './statistics';

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer,
  measurement: measurementReducer,
  statistics: statisticsReducer,
});

export default rootReducer;
