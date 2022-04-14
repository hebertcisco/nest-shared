import { GlobalCommon } from './global-common.entity';

export class UserCommon extends GlobalCommon {
  name!: string;
  email!: string;
  password!: string;
}
