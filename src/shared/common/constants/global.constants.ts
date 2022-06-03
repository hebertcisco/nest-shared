import dotenv from 'dotenv';
import { ApiHeaderOptions } from '@nestjs/swagger/dist/decorators/api-header.decorator';

dotenv.config();

export const PORT = Number(process.env.PORT) || 3000;
export const APP_SECRET = process.env.APP_SECRET;

export const CACHE_TTL = 60 * 60;
export const CACHE_TTL_50_SEC = 50;

export const API_HEADER_OPTIONS: ApiHeaderOptions[] = [
  {
    name: 'Authorization',
    description: 'Bearer Access Token',
    required: true,
  },
];
export const WEBSOCKET_PORT = PORT + 1;
