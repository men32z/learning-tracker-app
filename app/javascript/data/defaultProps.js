import Storage from '../helpers/Storage';

const defaultProps = {
  auth: {
    isLogged: Storage.getToken() && Storage.getToken() !== '',
    message: '',
  },
  subject: {
    subjects: [],
    mySubjects: [],
    loading: false,
    myLoading: false,
  },
  measurement: {
    myMeasurements: [],
    myLoading: false,
  },
};

export default defaultProps;
