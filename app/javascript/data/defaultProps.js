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
  statistics: {
    loadingSubjects: false,
    loadingMeasurements: false,
    subjects: {
      id: 1, name: 'Subjects', total: 0, goal: 8,
    },
    measurements: {
      id: 2, name: 'Measurements', total: 0, goal: 12,
    },
    minutes: {
      id: 3, name: 'Minutes', total: 0, goal: 0,
    },
  },
};

export default defaultProps;
