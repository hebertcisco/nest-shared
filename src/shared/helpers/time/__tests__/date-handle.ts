import { dateHandle } from '../../..';

describe('DateHandle', () => {
  let staticDate: Date;
  beforeEach(() => {
    staticDate = new Date(2022, 8, 10);
  });
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => staticDate.getTime());
    jest.useFakeTimers().setSystemTime(staticDate);
  });

  test('dayOfWeek', () => {
    const result = dateHandle.dayOfWeek(Date.now());
    expect(result).toBeFalsy();
  });
  test('isSaturday', () => {
    const result = dateHandle.isSaturday();
    expect(result).toBeFalsy();
  });
  test('isSunday', () => {
    const result = dateHandle.isSunday();
    expect(result).toBeFalsy();
  });
  test('isMonday', () => {
    const result = dateHandle.isMonday();
    expect(result).toBeFalsy();
  });
});
