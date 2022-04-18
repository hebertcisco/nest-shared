import * as crypto from 'crypto';
import { VALID_UUID_REGEX } from '../common/constants/regex.constants';

export type TypeBase64Gen = string | Buffer;
export type TypeRandomUUID = () => TypeBase64Gen;
export type TypeValidateUUID = (uuid: string) => boolean;

export const base64Gen: TypeBase64Gen = crypto.randomBytes(64).toString('base64');

export const randomUUID: TypeRandomUUID = () => base64Gen.replace(/\//g, '').replace(/\+/g, '');

export const validateUUID: TypeValidateUUID = (uuid) => {
  const regex = VALID_UUID_REGEX;
  return regex.test(uuid);
};

export const base64Decode = (base64: string) => Buffer.from(base64, 'base64');

export default base64Gen;
