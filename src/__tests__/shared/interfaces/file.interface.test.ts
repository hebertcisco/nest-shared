import type { FilesInterceptorInterfaceArgs } from '../../../modules';

describe('FilesInterceptorInterfaceArgs', () => {
  test('should be defined', () => {
    const state: FilesInterceptorInterfaceArgs = {
      field_name: 'field_name',
    };
    expect(state).toBeDefined();
  });
  test('should have field_name', () => {
    const state: FilesInterceptorInterfaceArgs = {
      field_name: 'field_name',
    };
    expect(state.field_name).toBe('field_name');
  });
});
