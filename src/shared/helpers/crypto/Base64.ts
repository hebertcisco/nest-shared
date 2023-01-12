import crypto from 'node:crypto';
import { Base64 as B64 } from '@localtools/base64';

import { VALID_UUID_REGEX } from '../../constants';

import type { DecodeEncodingType, DecodeStrType } from '../../contract/types/buffer.type';

export class Base64 {
  public decodeToBuffer(str: DecodeStrType, encoding: DecodeEncodingType = 'utf8') {
    return Buffer.from(str.toString(), encoding);
  }
  public validateUUID(uuid: string) {
    return VALID_UUID_REGEX.test(uuid);
  }
}

export const base64 = new Base64();

export const randomUUID: string = crypto.randomUUID();
export const base64Gen: string = B64.encode({
  text: randomUUID,
});
export const decodeToBuffer = base64.decodeToBuffer;

export const validateUUID = base64.validateUUID;

export const encode = B64.encode;
export const decode = B64.decode;

export default base64;
