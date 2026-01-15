#!/usr/bin/env node
import { generateAPIKey } from 'nest-shared';

const api_key = generateAPIKey({
  str: 'Hello World',
  prefix: 'apk',
  digest: 'hex',
  size: 32,
});
console.log('api_key', api_key); // apk_f9cfa3c29500449828aebc910ce1d328
