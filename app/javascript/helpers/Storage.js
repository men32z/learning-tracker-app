export default class Storage {
  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    const { token } = localStorage;
    return token;
  }

  static checkToken(error) {
    if (error && error.response && error.response.data
      && error.response.data.message === 'Signature has expired') {
      Storage.setToken('');
      window.location.reload();
      return false;
    } return true;
  }
}
