import Storage from '../helpers/Storage';

const defaultProps = {
  auth: {
    isLogged:  Storage.getToken() && Storage.getToken() !== '' || false,
    message: '',
  },
  subject: {
    subjects: [],
    loading: false,
  }
};

export default defaultProps;
