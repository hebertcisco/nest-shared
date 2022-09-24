import type { ApiHeaderOptions } from '@nestjs/swagger/dist/decorators/api-header.decorator';

export const NODE_PORT = 4000;

export const CACHE_TTL = 60 * 60;
export const CACHE_TTL_50_SEC = 50;

export const API_HEADER_OPTIONS: ApiHeaderOptions[] = [];
export const WEBSOCKET_PORT = NODE_PORT + 1;
