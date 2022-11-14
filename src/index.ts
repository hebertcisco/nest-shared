#!/usr/bin/env node
import 'reflect-metadata';
import 'dotenv/config';

export type {
  HttpResponse,
  HttpResponseError,
  AppServiceInterface,
  TypeOrmModuleOptionsExtension,
} from './common/interfaces';
export type { FileType, FileServiceArgs } from './modules';
export type { ClassType, TypeID, PromiseResponse } from './shared/types';

export * from './config';
export * from './config';

export * from './modules';
export * from './modules/file/interfaces';
export * from './modules/file/services';

export * from './shared';
export * from './common';
export * from './common/base';
export * from './common/constants';
export * from './common/entity';
export * from './common/interfaces';

export * from './shared/helpers';
export * from './shared/helpers/crypto';
export * from './shared/helpers/fs';
export * from './shared/helpers/http';
export * from './shared/helpers/math';
export * from './shared/helpers/time';
