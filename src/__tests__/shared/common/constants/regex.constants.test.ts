import { VALID_UUID_REGEX } from '../../../../common';

describe('VALID_UUID_REGEX', () => {
  test('should match a valid UUID', () => {
    expect(VALID_UUID_REGEX.test('f8a8d6e0-8a8d-4e0d-b6e0-8a8d4e0db6e0')).toBeTruthy();
  });
});
