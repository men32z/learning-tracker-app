const authReducer = (auth = {}, { type, payload }) => {
  switch (type) {
    case 'SIGN_UP_OK':
      return { ...auth, isLogged: true, message: payload.message };
    case 'SIGN_UP_BAD':
      return { ...auth, message: payload.message };
    case 'CLEAN_AUTH_MESSAGE':
      return { ...auth, message: '' };
    case 'LOGOUT':
      return { ...auth, isLogged: false, message: '' };
    default:
      return auth;
  }
};
export default authReducer;
