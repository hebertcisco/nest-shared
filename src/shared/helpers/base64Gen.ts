import crypto from 'node:crypto';
import { VALID_UUID_REGEX } from '../common/constants/regex.constants';

export type TypeBase64Gen = string | Buffer;
export type TypeRandomUUID = () => TypeBase64Gen;
export type TypeValidateUUID = (uuid: string) => boolean;

export type TypeBase64Encoder = (data: string) => TypeBase64Gen;
export type TypeBase64Decoder = (data: TypeBase64Gen) => string;

export const base64Gen: TypeBase64Gen = crypto.randomBytes(64).toString('base64');

export const randomUUID: TypeRandomUUID = () => base64Gen.replace(/\//g, '').replace(/\+/g, '');

export const validateUUID: TypeValidateUUID = (uuid) => {
  const regex = VALID_UUID_REGEX;
  return regex.test(uuid);
};

export const base64Decoder: TypeBase64Decoder = (data) => {
  const buffer = Buffer.from(data.toString(), 'base64');
  return buffer.toString('utf8');
};
export const base64Encoder: TypeBase64Encoder = (data) => {
  const buffer = Buffer.from(data);
  return buffer.toString('base64');
};

export default base64Gen;
