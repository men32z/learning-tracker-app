import axios from 'axios';
import Storage from '../helpers/Storage';
import {
  statisticsMeasurements, statisticsLoadingMeasurements, statisticsMeasurementsBad,
  myMeasurementsOk, myMeasurementsBad, myMeasurementsLoading ,
} from '../actions';

export const myMeasurementsThunk = (date) => dispatch => {
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
      dispatch(myMeasurementsBad(error.response.data));
      dispatch(statisticsMeasurementsBad());
    });
};
