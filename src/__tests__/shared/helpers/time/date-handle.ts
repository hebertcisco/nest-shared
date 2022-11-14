import { future, getAgeFromDate, getRandomBirthDate, past, yesterday } from '../../../../shared';
import { DateHandleImpl } from '../../../../shared';
import { date } from '../../../../shared';

describe('DateHandle', () => {
  let staticDate: Date;
  beforeEach(() => {
    staticDate = new Date(2022, 8, 10);
  });
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => staticDate.getTime());
    jest.useFakeTimers().setSystemTime(staticDate);
  });
  test('should return an object with the correct type and name', () => {
    const result = getAgeFromDate(staticDate);
    expect(result).toBe(-53);
  });

  test('dayOfWeek', () => {
    const dateHandle = new DateHandleImpl();
    const result = dateHandle.dayOfWeek(Date.now());
    expect(result).toBeFalsy();
  });
  test('isSaturday', () => {
    const dateHandle = new DateHandleImpl();
    const result = dateHandle.isSaturday();
    expect(result).toBeFalsy();
  });
  test('isSunday', () => {
    const dateHandle = new DateHandleImpl();
    const result = dateHandle.isSunday();
    expect(result).toBeFalsy();
  });
  test('isMonday', () => {
    const dateHandle = new DateHandleImpl();
    const result = dateHandle.isMonday();
    expect(result).toBeFalsy();
  });
  test('getRandomBirthDate', () => {
    const result = getRandomBirthDate(staticDate);
    expect(result).toBeInstanceOf(Date);
  });
  test('future', () => {
    const result = future(1, 'days');
    expect(result).toBeDefined();
  });
  test('past', () => {
    const result = past(1, 'days');
    expect(result).toBeDefined();
  });

  test('date', () => {
    expect(date).toBeInstanceOf(Object);
  });
  test('yesterday', () => {
    const result = yesterday();
    expect(result).toBeDefined();
  });
});
