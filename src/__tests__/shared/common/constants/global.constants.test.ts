import {
  NODE_PORT,
  WEBSOCKET_PORT,
  CACHE_TTL,
  CACHE_TTL_50_SEC,
} from '../../../../shared/common/constants/global.constants';

describe('NODE_PORT', () => {
  test('should be 4000', () => {
    expect(NODE_PORT).toBe(4000);
  });
});
describe('WEBSOCKET_PORT', () => {
  test('should be 4001', () => {
    expect(WEBSOCKET_PORT).toBe(4001);
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
