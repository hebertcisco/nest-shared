import moment from 'moment';
import DateHandle from 'date-handle';
import type { DurationInputArg1, DurationInputArg2 } from 'moment';

export type DateType = string | number | Date;

export class DateHandleImpl implements DateHandle {
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
  public getAgeFromDate(date: DateType): number {
    const today = new Date();
    const birthDate = new Date(date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  }
  public getRandomBirthDate(birthDate: DateType): DateType {
    const date = moment(birthDate);
    const randomDay = Math.floor(Math.random() * (365 - 1 + 1)) + 1;
    date.add(randomDay, 'days');
    return date.toDate();
  }
  public future(amount?: DurationInputArg1, unit?: DurationInputArg2): string {
    switch (unit as string) {
      case 'days':
        return moment().add(amount, 'days').format('YYYY-MM-DD HH:mm:ss') as string;
      case 'months':
        return moment().add(amount, 'months').format('YYYY-MM-DD HH:mm:ss') as string;
      case 'years':
        return moment().add(amount, 'years').format('YYYY-MM-DD HH:mm:ss') as string;
      case 'minutes':
        return moment().add(amount, 'minutes').format('YYYY-MM-DD HH:mm:ss') as string;
      case 'hours':
        return moment().add(amount, 'hours').format('YYYY-MM-DD HH:mm:ss') as string;
      default:
        return moment().add(amount, 'days').format('YYYY-MM-DD HH:mm:ss') as string;
    }
  }

  public past(amount: DurationInputArg1, unit: DurationInputArg2): string {
    switch (unit as string) {
      case 'days':
        return moment().subtract(amount, 'days').format('YYYY-MM-DD HH:mm:ss') as string;
      case 'months':
        return moment().subtract(amount, 'months').format('YYYY-MM-DD HH:mm:ss') as string;
      case 'years':
        return moment().subtract(amount, 'years').format('YYYY-MM-DD HH:mm:ss') as string;
      case 'minutes':
        return moment().subtract(amount, 'minutes').format('YYYY-MM-DD HH:mm:ss') as string;
      case 'hours':
        return moment().subtract(amount, 'hours').format('YYYY-MM-DD HH:mm:ss') as string;
      default:
        return moment().subtract(amount, 'days').format('YYYY-MM-DD HH:mm:ss') as string;
    }
  }

  public date = {
    y: new Date(moment().format('YYYY')),
    m: new Date(moment().format('MM')),
    d: new Date(moment().format('DD')),
    now: new Date(moment().format('YYYY-MM-DD HH:mm:ss')),
    nowFully: new Date(moment().format('YYYY-MM-DD HH:mm:ss.SSS')),
    h: new Date(moment().format('HH:mm:ss')),
  };
  public yesterday = (): string => moment().subtract(1, 'days').format('YYYY-MM-DD');
}

export const dateHandle = new DateHandleImpl();

const { dayOfWeek, isSaturday, isSunday, isMonday, getAgeFromDate, getRandomBirthDate, future, past, date, yesterday } =
  dateHandle;

export { dayOfWeek, isSaturday, isSunday, isMonday, getAgeFromDate, getRandomBirthDate, future, past, yesterday, date };
export default new DateHandleImpl();
