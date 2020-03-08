import Storage from '../helpers/Storage';
const defaultProps = {
  auth: {
    isLogged: Storage.getToken() || false,
    message: '',
  }
};

export default defaultProps;