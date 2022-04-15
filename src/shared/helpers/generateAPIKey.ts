import * as crypto from 'crypto';
import base64Gen from './base64Gen';

export type TypeDigest = crypto.HexBase64Latin1Encoding;

type TypeArgs = {
  str?: string;
  size?: number;
  prefix?: string;
  digest?: string;
  algorithm?: string;
};

export const generateAPIKey = (args?: TypeArgs) => {
  let size = 32;
  let str = base64Gen.toString();
  let prefix = 'apk';
  let digest: TypeDigest = 'hex';
  let algorithm = 'sha256';

  if (args) {
    if (args.size) size = Number(args.size);

    if (args.str) str = String(args.str);

    if (args.prefix) prefix = String(args.prefix);
    if (args.digest) {
      switch (args.digest) {
        case 'latin1':
          digest = 'latin1';
          break;
        case 'hex':
          digest = 'hex';
          break;
        default:
          digest = 'base64';
          break;
      }
    }
    if (args.algorithm) algorithm = String(args.algorithm);
  }

  const time = new Date();
  const milliseconds = time.getMilliseconds();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  const day = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const payload = `${str || base64Gen}${milliseconds}${seconds}${minutes}${hours}${day}${month}${year}${base64Gen}`;
  const sha256 = crypto.createHash(algorithm).update(payload.toString()).digest(digest);

  let key = '';
  for (let i = 0; i < sha256.length; i++) {
    key += sha256[i];
  }
  key = key.substring(0, size);
  return `${prefix}_${key}`;
};
export default generateAPIKey;
