
import { RandomNumber } from '../RandomNumber';

describe('RandomNumber', () => {
  it('should generate a random number within the specified range', () => {
    const min = 10;
    const max = 20;
    const randomNumber = new RandomNumber(min, max);
    const generated = randomNumber.generate();

    expect(generated).toBeGreaterThanOrEqual(min);
    expect(generated).toBeLessThanOrEqual(max);
  });

  it('should handle a different range', () => {
    const min = 100;
    const max = 200;
    const randomNumber = new RandomNumber(min, max);
    const generated = randomNumber.generate();

    expect(generated).toBeGreaterThanOrEqual(min);
    expect(generated).toBeLessThanOrEqual(max);
  });
});
