import type { TypeID, TypeArgs, PromiseResponse } from '../../../shared';

describe('CRUD Base', () => {
  let uuid: TypeID;
  let number: TypeID;
  let args: TypeArgs;
  let symbol: TypeID;
  let promiseResponse: PromiseResponse;

  beforeEach(() => {
    uuid = 'fd3130fa-463a-4cce-9055-70798ce4b838';
    number = 1;
    args = Object.create(null);
    symbol = Symbol.for(uuid);
    promiseResponse = Promise.resolve(args);
  });
  test('TypeID', () => {
    const id_number: TypeID = number;
    const id_uuid: TypeID = uuid;
    const id_string_symbol: TypeID = symbol;
    expect(id_number).toBe(number);
    expect(id_uuid).toBe(uuid);
    expect(id_string_symbol).toBe(symbol);
  });
  test('TypeArgs', () => {
    expect(args).toBe(args);
  });
  test('PromiseResponse', () => {
    expect(promiseResponse).toBe(promiseResponse);
    expect(promiseResponse).toBeInstanceOf(Promise);
  });
});
