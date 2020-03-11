import Storage from '../helpers/Storage';
import Time from '../helpers/Time';

const defaultProps = {
  auth: {
    isLogged: (Storage.getToken() !== '' && typeof Storage.getToken() !== 'undefined'),
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
  measure: {
    item: {
      id: null,
      units: 0,
      date_m: Time.today(),
      subject_id: null,
    },
    message: '',
    loading: false,
  },
};

export default defaultProps;
