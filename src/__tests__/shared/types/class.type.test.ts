import type { ClassType } from '../../../shared/types';

describe('ClassType', () => {
  test('should be a function', () => {
    const clazz: ClassType = class Test {};
    expect(clazz).toBeInstanceOf(Function);
  });
});
