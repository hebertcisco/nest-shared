import {
  PORT,
  WEBSOCKET_PORT,
  CACHE_TTL,
  CACHE_TTL_50_SEC,
  API_HEADER_OPTIONS,
} from '../../../../shared/common/constants/global.constants';

describe('PORT', () => {
  test('should be 3000', () => {
    expect(PORT).toBe(3000);
  });
});
describe('WEBSOCKET_PORT', () => {
  test('should be 3001', () => {
    expect(WEBSOCKET_PORT).toBe(3001);
  });
});
describe('CACHE_TTL', () => {
  test('should be 3600', () => {
    expect(CACHE_TTL).toBe(3600);
  });
});
describe('CACHE_TTL_50_SEC', () => {
  test('should be 50', () => {
    expect(CACHE_TTL_50_SEC).toBe(50);
  });
});
describe('API_HEADER_OPTIONS', () => {
  test('should be [{name: Authorization, description: Bearer Access Token, required: true}]', () => {
    expect(API_HEADER_OPTIONS).toStrictEqual([
      {
        name: 'Authorization',
        description: 'Bearer Access Token',
        required: true,
      },
    ]);
  });
});
