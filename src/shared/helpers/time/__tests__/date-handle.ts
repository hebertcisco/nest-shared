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

  test('isSaturday', () => {
    const result = dateHandle.isSaturday();
    expect(result).toBeDefined();
  });

  test('isMonday', () => {
    const result = dateHandle.isMonday();
    expect(result).toBeDefined();
  });
});
