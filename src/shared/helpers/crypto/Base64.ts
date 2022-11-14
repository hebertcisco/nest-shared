import crypto from 'node:crypto';
import { BufferBase } from '../../../common/base/buffer-base';

import { VALID_UUID_REGEX } from '../../../common';

import type { DecodeEncodingType, DecodeStrType, EncodeDataType } from '../../types/buffer.type';

export class Base64 implements BufferBase {
  public encode(data: EncodeDataType) {
    const buffer = Buffer.from(data);
    return buffer.toString('base64');
  }
  public decode(str: DecodeStrType): string {
    const buffer = Buffer.from(str.toString(), 'base64');
    return buffer.toString('utf8');
  }
  public decodeToBuffer(str: DecodeStrType, encoding: DecodeEncodingType = 'utf8') {
    return Buffer.from(str.toString(), encoding);
  }
  public validateUUID(uuid: string) {
    return VALID_UUID_REGEX.test(uuid);
  }
  public randomUUID() {
    const uuid = crypto.randomUUID();
    if (!VALID_UUID_REGEX.test(uuid)) {
      throw new Error(`Invalid UUID: ${uuid}`);
    }
    return uuid;
  }
}
export const base64 = new Base64();
export const base64Gen: string = base64.encode(base64.randomUUID());
export const randomUUID: string = base64.randomUUID();
export const decodeToBuffer = base64.decodeToBuffer;
export const validateUUID = base64.validateUUID;
export const encode = base64.encode;
export const decode = base64.decode;

export default base64;
