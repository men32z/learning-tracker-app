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
    const date = Time.ts(d);
    date.setDate(date.getDate() - 1);
    return Time.aString(date);
  }

  static tomorrow(d) {
    const date = Time.ts(d);
    date.setDate(date.getDate() + 1);
    return Time.aString(date);
  }

  static ts(d) {
    return new Date(d.split('-').map(x => parseInt(x, 10)));
  }

  static format(d) {
    const date = Time.ts(d);
    return `${date.getDate()} ${Time.getMonthName(date.getMonth())} ${date.getFullYear()}`;
  }
}
