import { Sum } from '../../../../shared';

describe('sum', () => {
  let arrayOfNumbers: number[];
  beforeEach(() => {
    arrayOfNumbers = [1, 2, 3, 4, 5];
  });
  it('should return the sum of two numbers', () => {
    const sum = Sum;
    const result = sum(arrayOfNumbers);
    expect(result).toBe(15);
  });
});
