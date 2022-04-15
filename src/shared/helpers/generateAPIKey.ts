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
    switch (args) {
      case args.size:
        size = Number(args.size);
        break;
      case args.str:
        str = String(args.str);
        break;
      case args.prefix:
        prefix = String(args.prefix);
        break;
      case args.digest:
        if (String(args.digest) === 'latin1') digest = 'latin1';
        if (String(args.digest) === 'hex') digest = 'hex';
        if (String(args.digest) === 'base64') digest = 'base64';
        break;
      case args.algorithm:
        algorithm = String(args.algorithm);
        break;
      default:
        return null;
    }
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
  return `${prefix}_${key.toString()}`;
};
export default generateAPIKey;
