import Storage from '../helpers/Storage';

const defaultProps = {
  auth: {
    isLogged: Storage.getToken() && Storage.getToken() !== '',
    message: '',
  },
  subject: {
    subjects: [],
    loading: false,
  },
};

export default defaultProps;
