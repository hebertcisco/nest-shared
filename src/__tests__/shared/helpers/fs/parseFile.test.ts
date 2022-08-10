import { parseFile } from '../../../../shared';

describe('parseFile', () => {
  test('should return an object with the correct type and name', () => {
    const result = parseFile({ fieldname: 'file', filename: 'test.png' });
    expect(result).toEqual({
      type: 'file',
      name: 'test.png',
    });
  });
});
