import dotenv from 'dotenv';
import { ApiHeaderOptions } from '@nestjs/swagger/dist/decorators/api-header.decorator';

dotenv.config();

export const PORT = Number(process.env.PORT) || 3000;
export const APP_SECRET = process.env.APP_SECRET;

export const CACHE_TTL = 60 * 60;
export const CACHE_TTL_50_SEC = 50;

export const UPLOAD_PATH: string = process.env.NODE_ENV === 'production' ? '/dist/public/upload' : '/public/upload';
export const UPLOAD_PATH_URL = 'upload';
export const PUBLIC_PATH: string = process.env.NODE_ENV === 'production' ? '/dist/public' : '/public';

export const API_HEADER_OPTIONS: ApiHeaderOptions[] = [
  {
    name: 'x-api-key',
    description: 'API-Key for access',
    required: true,
  },
  {
    name: 'Authorization',
    description: 'Bearer Access Token',
    required: true,
  },
];
export const WEBSOCKET_PORT = PORT + 1;
