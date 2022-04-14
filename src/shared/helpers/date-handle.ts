import moment from 'moment';

export type DateType = string | number | Date;

export class DateHandle {
  public day: number;
  constructor() {
    this.day = moment().weekday();
  }
  public dayOfWeek = (thisDay: number): boolean => {
    return this.day === thisDay;
  };
  public isSaturday = (): boolean => {
    return this.dayOfWeek(6);
  };
  public isSunday = (): boolean => {
    return this.dayOfWeek(0);
  };
  public isMonday = (): boolean => {
    return this.dayOfWeek(1);
  };
  static getAgeFromDate(date: DateType): number {
    const today = new Date();
    const birthDate = new Date(date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  }
  static getRandomBirthDate(birthDate: DateType): DateType {
    const date = moment(birthDate);
    const randomDay = Math.floor(Math.random() * (365 - 1 + 1)) + 1;
    date.add(randomDay, 'days');
    return date.toDate();
  }
  static future(
    many: moment.DurationInputArg1,
    timeType?: 'minutes' | 'hours' | 'days' | 'months' | 'years',
  ): string | any {
    switch (timeType) {
      case 'days':
        return moment().add(many, 'days').format('YYYY-MM-DD HH:mm:ss');
      case 'months':
        return moment().add(many, 'months').format('YYYY-MM-DD HH:mm:ss');
      case 'years':
        return moment().add(many, 'years').format('YYYY-MM-DD HH:mm:ss');
      case 'minutes':
        return moment().add(many, 'minutes').format('YYYY-MM-DD HH:mm:ss');
      case 'hours':
        return moment().add(many, 'hours').format('YYYY-MM-DD HH:mm:ss');
      default:
        return moment().add(many, 'days').format('YYYY-MM-DD HH:mm:ss');
    }
  }
  static futureFully(many: number | Date | any, timeType?: 'days' | 'months' | 'years'): string | any {
    switch (timeType) {
      case 'days':
        return this.future(many, 'days').format('YYYY-MM-DD HH:mm:ss');
      case 'months':
        return this.future(many, 'months').format('YYYY-MM-DD HH:mm:ss');
      case 'years':
        return this.future(many, 'years').format('YYYY-MM-DD HH:mm:ss');
    }
  }
  static past(many: number | Date | any, timeType?: 'days' | 'months' | 'years'): string | any {
    switch (timeType) {
      case 'days':
        return moment().subtract(many, 'days').format('YYYY-MM-DD');
      case 'months':
        return moment().subtract(many, 'months').format('YYYY-MM-DD');
      case 'years':
        return moment().subtract(many, 'years').format('YYYY-MM-DD');
    }
  }
  static pastFully(many: number | Date | any, timeType?: 'days' | 'months' | 'years'): string | any {
    switch (timeType) {
      case 'days':
        return moment().subtract(many, 'days').format('YYYY-MM-DD HH:mm:ss');
      case 'months':
        return moment().subtract(many, 'months').format('YYYY-MM-DD HH:mm:ss');
      case 'years':
        return moment().subtract(many, 'years').format('YYYY-MM-DD HH:mm:ss');
    }
  }
  static date = {
    y: moment().format('YYYY'),
    m: moment().format('MM'),
    d: moment().format('DD'),
    now: moment().format('YYYY-MM-DD'),
    nowFully: moment().format('YYYY-MM-DD HH:mm:ss'),
    h: moment().format('HH:mm:ss'),
  };
  static yesterday = (): string => moment().subtract(1, 'days').format('YYYY-MM-DD');
}
const { future, futureFully, past, pastFully, date, yesterday, getRandomBirthDate, getAgeFromDate } = DateHandle;
export { future, futureFully, past, pastFully, date, yesterday, getRandomBirthDate, getAgeFromDate };
export default DateHandle;
