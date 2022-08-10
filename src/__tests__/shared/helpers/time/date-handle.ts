import { DateHandle } from '../../../../shared';

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
    const result = DateHandle.getAgeFromDate(staticDate);
    expect(result).toBe(-53);
  });

  test('dayOfWeek', () => {
    const dateHandle = new DateHandle();
    const result = dateHandle.dayOfWeek(Date.now());
    expect(result).toBeFalsy();
  });
  test('isSaturday', () => {
    const dateHandle = new DateHandle();
    const result = dateHandle.isSaturday();
    expect(result).toBeFalsy();
  });
  test('isSunday', () => {
    const dateHandle = new DateHandle();
    const result = dateHandle.isSunday();
    expect(result).toBeFalsy();
  });
  test('isMonday', () => {
    const dateHandle = new DateHandle();
    const result = dateHandle.isMonday();
    expect(result).toBeFalsy();
  });
  test('getRandomBirthDate', () => {
    const result = DateHandle.getRandomBirthDate(staticDate);
    expect(result).toBeInstanceOf(Date);
  });
  test('future', () => {
    const result = DateHandle.future(1, 'days');
    expect(result).toBeDefined();
  });
  test('past', () => {
    const result = DateHandle.past(1, 'days');
    expect(result).toBeDefined();
  });
  test('pastFully', () => {
    const result = DateHandle.pastFully(1, 'days');
    expect(result).toBeDefined();
  });
  test('date', () => {
    const result = DateHandle.date;
    expect(result).toBeInstanceOf(Object);
  });
  test('yesterday', () => {
    const result = DateHandle.yesterday();
    expect(result).toBeDefined();
  });
});
