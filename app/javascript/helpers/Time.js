export default class Time {
  static aString(date){
    return `${date.getFullYear()}-${date.getMonth() < 9 ? 0 : ''}` +
    `${date.getMonth() + 1}-${date.getDate() < 10 ? 0 : ''}${date.getDate()}`;
  }
  static today(){
    let date = new Date();
    return Time.aString(date);
  }
}