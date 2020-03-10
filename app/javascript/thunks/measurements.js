import axios from 'axios';
import Storage from '../helpers/Storage';

import {
  measureLoading, measureOk, measureBad,
  statisticsMeasurements, statisticsLoadingMeasurements, statisticsMeasurementsBad,
  myMeasurementsOk, myMeasurementsBad, myMeasurementsLoading,
} from '../actions';

export const measureThunk =  ({units, subjectId, date_m}) => dispatch => {
  dispatch(measureLoading());
  return axios
    .post(
      `/api/subjects/${subjectId}/measurements`,
      {
        units,
        date_m
      },
      {
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(measureOk(response.data));
      }
      return response.data;
    })
    .catch(error => {
      Storage.checkToken(error);
      dispatch(measureBad());
    });
};

export const measurementsThunk = subjectId => dispatch => {
  dispatch(myMeasurementsLoading());
  dispatch(statisticsLoadingMeasurements());
  axios
    .get(
      `/api/subjects/${subjectId}/measurements`,
      {
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(myMeasurementsOk(response.data));
        dispatch(statisticsMeasurements(response.data));
      }
      return response.data;
    })
    .catch(error => {
      Storage.checkToken(error);
      dispatch(myMeasurementsBad(error.response.data));
      dispatch(statisticsMeasurementsBad());
    });
};

export const myMeasurementsThunk = date => dispatch => {
  dispatch(myMeasurementsLoading());
  dispatch(statisticsLoadingMeasurements());
  axios
    .get(
      '/api/measurements',
      {
        params: {
          date,
        },
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(myMeasurementsOk(response.data));
        dispatch(statisticsMeasurements(response.data));
      }
      return response.data;
    })
    .catch(error => {
      Storage.checkToken(error);
      dispatch(myMeasurementsBad(error.response.data));
      dispatch(statisticsMeasurementsBad());
    });
};
