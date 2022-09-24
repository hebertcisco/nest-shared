import { configService } from './shared';

export type {
  HttpResponse,
  HttpResponseError,
  AppServiceInterface,
  TypeOrmModuleOptionsExtension,
} from './shared/common/interfaces';

export const { getValue, getBoolean, ensureValues, getPort, isProduction, isDevelopment, isTest, getEnvironment } =
  configService;

export * from './shared';
export * from './shared/common';
export * from './shared/core';
export * from './shared/helpers';
export * from './shared/interfaces';
export * from './shared/services';
export * from './shared/types';
