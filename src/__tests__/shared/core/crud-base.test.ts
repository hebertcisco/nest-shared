import { CrudBase } from '../../../common';

describe('CrudBase', () => {
  it('should create an instance', () => {
    class CrudImpl implements CrudBase {}
    expect(new CrudImpl()).toBeTruthy();
  });
});
