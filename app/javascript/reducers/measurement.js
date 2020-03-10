const measurementReducer = (measurement = {}, { type, payload }) => {
  switch (type) {
    case 'MY_MEASUREMENTS_OK':
      return { ...measurement, myMeasurements: payload, myLoading: false };
    case 'MY_MEASUREMENTS_BAD':
      return { ...measurement, myMessage: payload.message, myLoading: false };
    case 'MY_MEASUREMENTS_LOADING':
      return { ...measurement, myLoading: true };
    default:
      return measurement;
  }
};
export default measurementReducer;
