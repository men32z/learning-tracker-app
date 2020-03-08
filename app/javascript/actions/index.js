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
