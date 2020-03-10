export default class Time {
  static aString(date) {
    return `${date.getFullYear()}-${date.getMonth() < 9 ? 0 : ''}`
    + `${date.getMonth() + 1}-${date.getDate() < 10 ? 0 : ''}${date.getDate()}`;
  }

  static getMonthName(month) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return monthNames[month];
  }

  static today() {
    const date = new Date();
    return Time.aString(date);
  }

  static yesterday(d) {
    const date = new Date(d.split('-').map(x => parseInt(x, 10)));
    date.setDate(date.getDate() - 1);
    return Time.aString(date);
  }

  static tomorrow(d) {
    const date = new Date(d.split('-').map(x => parseInt(x, 10)));
    date.setDate(date.getDate() + 1);
    return Time.aString(date);
  }

  static format(d) {
    const date = new Date(d.split('-').map(x => parseInt(x, 10)));
    return `${date.getDate()} ${Time.getMonthName(date.getMonth())} ${date.getFullYear()}`;
  }
}
