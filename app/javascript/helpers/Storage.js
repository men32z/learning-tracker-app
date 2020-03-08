export default class Storage {
  static setToken(token){
    localStorage.setItem('token', token);
  }
  static getToken(){
    const { token } = localStorage;
    return token;
  }
}