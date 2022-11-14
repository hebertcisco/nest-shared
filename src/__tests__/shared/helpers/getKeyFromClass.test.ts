import { getKeyFromClass } from '../../../';
import CrudBase from '../../../common/base/crud-base';

describe('getKeyFromClass', () => {
  it('should return akey from CrudBase class', () => {
    const result = getKeyFromClass(CrudBase);
    const type_result = 'CRUDBASE';
    expect(result).toBe(type_result);
  });
});
