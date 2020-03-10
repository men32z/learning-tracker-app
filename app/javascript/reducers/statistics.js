const statisticsReducer = (statistics = {}, { type, payload }) => {
  switch (type) {
    case 'STATISTICS_SUBJECTS':
      return {
        ...statistics,
        subjects: { ...statistics.subjects, total: payload },
        loadingSubjects: false,
      };
    case 'STATISTICS_MEASUREMENTS':
      return {
        ...statistics,
        measurements: { ...statistics.measurements, total: payload.length },
        minutes: { ...statistics.minutes, total: payload.reduce(((a, b) => a + b.units), 0) },
        loadingMeasurements: false,
      };
    case 'STATISTICS_MEASUREMENTS_BAD':
      return { ...statistics, loadingMeasurements: false };
    case 'STATISTICS_LOADING_SUBJECTS':
      return { ...statistics, loadingSubjects: true };
    case 'STATISTICS_LOADING_MEASUREMENTS':
      return { ...statistics, loadingMeasurements: true };
    default:
      return statistics;
  }
};
export default statisticsReducer;
