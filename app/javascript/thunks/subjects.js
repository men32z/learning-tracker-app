import axios from 'axios';
import Storage from '../helpers/Storage';
import {
  subjectsOk, subjectsBad, subjectsLoading,
  statisticsSubjects, statisticsLoadingSubjects,
  mySubjectsOk, mySubjectsBad, mySubjectsLoading,
} from '../actions';

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
      Storage.checkToken(error);
      dispatch(subjectsBad(error.response.data));
    });
};

export const mySubjectsThunk = () => dispatch => {
  dispatch(mySubjectsLoading());
  dispatch(statisticsLoadingSubjects());
  axios
    .get(
      '/api/subjects/mine',
      {
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(mySubjectsOk(response.data));
        dispatch(statisticsSubjects(response.data.length));
      }
      return response.data;
    })
    .catch(error => {
      Storage.checkToken(error);
      dispatch(mySubjectsBad(error.response.data));
      dispatch(statisticsSubjects(0));
    });
};

export const subjectRegisterThunk = subject => () => axios
  .post(
    '/api/register_subject',
    {
      subject_id: subject,
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
      // dispatch(mySubjectsOk(response.data));
    }
    return response.data;
  })
  .catch(error => {
    Storage.checkToken(error);
    // dispatch(statisticsSubjects(0));
  });
