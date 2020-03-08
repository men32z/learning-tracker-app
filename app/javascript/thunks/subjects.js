import axios from 'axios';
import Storage from '../helpers/Storage';
import { subjectsOk, subjectsBad, subjectsLoading } from '../actions';

export const subjectsThunk = () => dispatch => {
  dispatch(subjectsLoading());

  axios
    .get(
      '/api/subjects',
      {
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(subjectsOk(response.data));
      }
      return response.data;
    })
    .catch(error => {
      dispatch(subjectsBad(error.response.data));
    });
};