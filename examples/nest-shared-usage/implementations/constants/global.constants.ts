#!/usr/bin/env node
import {
  NODE_PORT,
  CACHE_TTL,
  CACHE_TTL_50_SEC,
  API_HEADER_OPTIONS,
  WEBSOCKET_PORT,
  VALID_UUID_REGEX,
} from 'nest-shared';

console.log('NODE_PORT', NODE_PORT); // 4000
console.log('CACHE_TTL', CACHE_TTL); // 3600
console.log('CACHE_TTL_50_SEC', CACHE_TTL_50_SEC); // 50
console.log('API_HEADER_OPTIONS', API_HEADER_OPTIONS); // []
console.log('WEBSOCKET_PORT', WEBSOCKET_PORT); // 4001
console.log('VALID_UUID_REGEX', VALID_UUID_REGEX.test('28aebbd6-173b-4375-99eb-56dc04ec2bcb')); // true
