import defaultProps from '../data/defaultProps';

const measureReducer = (measure = {}, { type, payload }) => {
  switch (type) {
    case 'MEASURE_OK':
      return { ...measure, item: payload, loading: false };
    case 'NEW_MEASURE':
      return { ...measure, item: defaultProps.measure.item, loading: false };
    case 'MEASURE_BAD':
      return { ...measure, message: payload.message, loading: false };
    case 'MEASURE_LOADING':
      return { ...measure, loading: true };
    default:
      return measure;
  }
};
export default measureReducer;
