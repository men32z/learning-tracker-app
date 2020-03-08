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
