import 'dotenv/config';
import type { ApiHeaderOptions } from '@nestjs/swagger/dist/decorators/api-header.decorator';
import { generateAPIKey, getPort, getValue } from '../../..';

export const PORT = getPort();
export const APP_SECRET = getValue('APP_SECRET', false) || generateAPIKey();

export const CACHE_TTL = 60 * 60;
export const CACHE_TTL_50_SEC = 50;

export const API_HEADER_OPTIONS: ApiHeaderOptions[] = [];
export const WEBSOCKET_PORT = getPort() + 1;
