import * as helpers from './shared/helpers';
import * as common from './shared/common';
export { HttpResponse, HttpResponseError } from './shared/common/interfaces';

const props = {
  ...helpers,
  ...common.constants.GLOBALS,
  ...common.constants.REGEX,
  ...common.entity,
  ...common.interfaces,
};

export const {
  base64Gen,
  base64Decode,
  randomUUID,
  validateUUID,
  TypeOrmModuleOptionsExtension,
  AppServiceInterface,
  Sum,
  parseFile,
  date,
  generateAPIKey,
} = props;

export default props;
