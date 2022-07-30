import * as helpers from './shared/helpers';
import * as common from './shared/common';
import * as core from './shared/core';
import * as services from './shared/services';

export type { HttpResponse, HttpResponseError } from './shared/common/interfaces';

const props = {
  ...helpers,
  ...common.constants.GLOBALS,
  ...common.constants.REGEX,
  ...common.entity,
  ...common.interfaces,
  ...core,
  ...services,
};

export const {
  base64Gen,
  base64Decoder,
  base64Encoder,
  randomUUID,
  validateUUID,
  TypeOrmModuleOptionsExtension,
  AppServiceInterface,
  Sum,
  RandomNumber,
  parseFile,
  date,
  generateAPIKey,
  handleWithAxiosResponse,
  isSuccessfulRequest,
  parseQueryParams,
  getKeyFromClass,
} = props;

export * from './shared';
export * from './shared/common';
export * from './shared/core';
export * from './shared/helpers';
export * from './shared/interfaces';
export * from './shared/services';
export * from './shared/types';

export default props;
