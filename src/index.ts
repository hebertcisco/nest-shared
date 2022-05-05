import * as helpers from './shared/helpers';
import * as common from './shared/common';
import * as core from './shared/core';
export type { HttpResponse, HttpResponseError } from './shared/common/interfaces';

const props = {
  ...helpers,
  ...common.constants.GLOBALS,
  ...common.constants.REGEX,
  ...common.entity,
  ...common.interfaces,
  ...core,
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
  parseFile,
  date,
  generateAPIKey,
  handleWithAxiosResponse,
  isSuccessfulRequest,
  parseQueryParams,
  getKeyFromClass,
} = props;

export default props;
