#!/usr/bin/env node
import 'reflect-metadata';
import 'dotenv/config';

export type {
  HttpResponse,
  HttpResponseError,
  AppServiceInterface,
  TypeOrmModuleOptionsExtension,
} from './shared/common/interfaces';

export * from './shared';
export * from './shared/core';
export * from './shared/interfaces';
export * from './shared/services';
export * from './shared/types';
export * from './shared/config';

export * from './shared/common';
export * from './shared/common/base';
export * from './shared/common/constants';
export * from './shared/common/entity';
export * from './shared/common/interfaces';

export * from './shared/helpers';
export * from './shared/helpers/crypto';
export * from './shared/helpers/fs';
export * from './shared/helpers/http';
export * from './shared/helpers/math';
export * from './shared/helpers/time';
