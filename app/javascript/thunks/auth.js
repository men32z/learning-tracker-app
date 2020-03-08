import axios from 'axios';
import Storage from '../helpers/Storage';
import { signUpOk, signUpBad } from '../actions';

export const signUpThunk = ({
  name, email, password, passwordConfirmation,
}) => dispatch => {
  axios
    .post(
      '/api/signup',
      {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 201) {
        Storage.setToken(response.data.auth_token);
        dispatch(signUpOk(response.data));
      }
      return response.data;
    })
    .catch(error => {
      dispatch(signUpBad(error.response.data));
    });
};

export const logInThunk = ({ email, password }) => dispatch => {
  axios
    .post('/api/auth/login', { email, password }, { withCredentials: true })
    .then(response => {
      if (response.status === 200) {
        Storage.setToken(response.data.auth_token);
        dispatch(signUpOk(response.data));
      }
      return response.data;
    })
    .catch(error => {
      dispatch(signUpBad(error.response.data));
    });
};
