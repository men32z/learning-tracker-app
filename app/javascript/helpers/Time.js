export default class Time {
  static aString(date){
    return `${date.getFullYear()}-${date.getMonth() < 9 ? 0 : ''}` +
    `${date.getMonth() + 1}-${date.getDate() < 10 ? 0 : ''}${date.getDate()}`;
  }

  static getMonthName(month){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month];
  }

  static today(){
    let date = new Date();
    return Time.aString(date);
  }

  static yesterday(d){
    let date = new Date(d.split('-').map(x=> parseInt(x)));
    date.setDate(date.getDate() - 1);
    return Time.aString(date);
  }

  static tomorrow(d){
    let date = new Date(d.split('-').map(x=> parseInt(x)));
    date.setDate(date.getDate() + 1);
    return Time.aString(date);
  }

  static format(d){
    let date = new Date(d.split('-').map(x=> parseInt(x)));
    return `${date.getDate()} ${Time.getMonthName(date.getMonth())} ${date.getFullYear()}`;
  }
}