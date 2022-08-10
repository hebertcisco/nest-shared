import { ClassType } from '../../../shared';

describe('ClassType', () => {
  test('should be a function', () => {
    const clazz: ClassType = class Test {};
    expect(clazz).toBeInstanceOf(Function);
  });
});
