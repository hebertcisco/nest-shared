import { parseQueryParams } from '../../../src';

describe('parseQueryParams', () => {
  let queryParams: object;
  beforeAll(() => {
    queryParams = {
      message: 'Hello World',
    };
  });
  it('should return a query string parsed', () => {
    const result = parseQueryParams(queryParams);
    const type_result = typeof result;
    expect(type_result).toBe('string');
  });
});
