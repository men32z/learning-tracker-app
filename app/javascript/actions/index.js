export function measureOk(measure) {
  return {
    type: 'MEASURE_OK',
    payload: measure,
  };
}

export function measureBad(data) {
  return {
    type: 'MEASURE_BAD',
    payload: data,
  };
}

export function newMeasure() {
  return {
    type: 'NEW_MEASURE',
  };
}

export function measureLoading() {
  return {
    type: 'MEASURE_LOADING',
  };
}

export function statisticsSubjects(subjects) {
  return {
    type: 'STATISTICS_SUBJECTS',
    payload: subjects,
  };
}

export function statisticsMeasurements(measurements) {
  return {
    type: 'STATISTICS_MEASUREMENTS',
    payload: measurements,
  };
}

export function statisticsMeasurementsBad(measurements) {
  return {
    type: 'STATISTISCS_MEASUREMENTS_BAD',
    payload: measurements,
  };
}

export function statisticsLoadingSubjects() {
  return {
    type: 'STATISTICS_LOADING_SUBJECTS',
  };
}

export function statisticsLoadingMeasurements() {
  return {
    type: 'STATISTICS_LOADING_MEASUREMENTS',
  };
}

export function myMeasurementsOk(subject) {
  return {
    type: 'MY_MEASUREMENTS_OK',
    payload: subject,
  };
}

export function myMeasurementsBad(error) {
  return {
    type: 'MY_MEASUREMENTS_BAD',
    payload: error,
  };
}

export function myMeasurementsLoading() {
  return {
    type: 'MY_MEASUREMENTS_LOADING',
  };
}

export function mySubjectsOk(subject) {
  return {
    type: 'MY_SUBJECTS_OK',
    payload: subject,
  };
}

export function mySubjectsBad(error) {
  return {
    type: 'MY_SUBJECTS_BAD',
    payload: error,
  };
}

export function mySubjectsLoading() {
  return {
    type: 'MY_SUBJECTS_LOADING',
  };
}

export function subjectsOk(subject) {
  return {
    type: 'SUBJECTS_OK',
    payload: subject,
  };
}

export function subjectsBad(error) {
  return {
    type: 'SUBJECTS_BAD',
    payload: error,
  };
}

export function subjectsLoading() {
  return {
    type: 'SUBJECTS_LOADING',
  };
}

export function signUpOk(auth) {
  return {
    type: 'SIGN_UP_OK',
    payload: auth,
  };
}

export function signUpBad(auth) {
  return {
    type: 'SIGN_UP_BAD',
    payload: auth,
  };
}

export function cleanAuthMessage() {
  return {
    type: 'CLEAN_AUTH_MESSAGE',
  };
}

export function logout() {
  return {
    type: 'LOGOUT',
  };
}
