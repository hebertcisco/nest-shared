
import { getKeyFromClass } from '../getKeyFromClass';

class MyClass {}

describe('getKeyFromClass', () => {
  it('should return the uppercase name of the class', () => {
    const key = getKeyFromClass(MyClass);
    expect(key).toBe('MYCLASS');
  });
});
