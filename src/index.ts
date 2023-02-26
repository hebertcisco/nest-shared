#!/usr/bin/env node
import 'reflect-metadata';
import 'dotenv/config';

export type {
  HttpResponse,
  HttpResponseError,
  AppServiceInterface,
  TypeOrmModuleOptionsExtension,
} from './shared/contract/interfaces';

export type { FileType, FileServiceArgs } from './modules';
export type { ClassType, TypeID, PromiseResponse } from './shared/contract/types';

export * from './config';
export * from './config';

export * from './modules';
export * from './modules/file/interfaces';
export * from './modules/file/services';

export * from './shared';
export * from './shared/contract/base';
export * from './shared/constants';
export * from './shared/contract/entity';
export * from './shared/contract/interfaces';

export * from './shared/helpers';
export * from './shared/helpers/crypto';
export * from './shared/helpers/fs';
export * from './shared/helpers/http';
export * from './shared/helpers/math';
export * from './shared/helpers/time';
