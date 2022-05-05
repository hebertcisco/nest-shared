import { getKeyFromClass } from '../../../../src';
import { CrudBase } from '../../../shared/core';

describe('getKeyFromClass', () => {
  it('should return akey from CrudBase class', () => {
    const result = getKeyFromClass(CrudBase);
    const type_result = 'CRUDBASE';
    expect(result).toBe(type_result);
  });
});
