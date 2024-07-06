import crypto from 'node:crypto';
import { URL } from 'node:url';
import { FilesInterceptor } from '@nestjs/platform-express';

import * as AWS from 'aws-sdk';
import multerS3 from 'multer-s3';
import uniqueSlug from 'unique-slug';

import type { Request } from 'express';
import type { URL as UrlType } from 'url';

import type { FileServiceArgs, FileType } from '../types/file.type';
import type { FilesInterceptorInterfaceArgs } from '../interfaces';

export class FileService {
  private s3: AWS.S3 = new AWS.S3();
  constructor(private args: FileServiceArgs) {
    AWS.config.update({
      accessKeyId: this.args.AWS_ACCESS_KEY_ID,
      secretAccessKey: this.args.AWS_SECRET_ACCESS_KEY,
    });
  }

  public genFileName = (
    req: Request,
    { originalname }: FileType,
    callback: (error: Error | null, filename: string) => void,
  ) => {
    void req;
    const [, extension] = originalname.split('.');
    callback(null, `${crypto.randomUUID()}.${extension}`);
  };
  public filesInterceptor(args: FilesInterceptorInterfaceArgs) {
    const bucket = args.bucket;
    const metadata = (req: Request, file: FileType, cb: (arg0: any, arg1: { fieldName: string }) => void) => {
      void req;
      cb(null, { fieldName: file.fieldname });
    };
    const key = (req: Request, file: FileType, cb: (arg0: any, arg1: string) => void) => {
      this.genFileName(req, file, (err, fileName) => {
        void err;
        cb(null, uniqueSlug(fileName));
      });
    };
    const contentType = (req: Request, file: FileType, cb: (arg0: any, arg1: string) => void) => {
      void req;
      cb(null, file.mimetype);
    };

    return FilesInterceptor(args.field_name, Number(args.options?.maxCount), {
      storage: multerS3({
        s3: this.s3 as any,
        bucket: String(bucket),
        acl: args?.acl,
        metadata: metadata,
        key: key,
        contentType: contentType,
      }),
    });
  }
  public getS3FileURL(req: Request | any): UrlType | null {
    const files = req.files as any[];
    if (!files || !files.length) {
      return null;
    }
    return new URL(files[0]?.location);
  }
  public getS3FileKey(req: Request): string | null {
    const fileURL = this.getS3FileURL(req);
    if (!fileURL || !fileURL.pathname) {
      return null;
    }
    const parsedPath = fileURL?.pathname?.replace(/^\/+/, '');
    return String(parsedPath);
  }
  public getSignedUrl(key: string, expires: number, bucket?: string): UrlType {
    const signedURl = this.handleSignedUrl(String(bucket), key, expires || 60 * 5);
    return signedURl;
  }

  public handleSignedUrl(bucket: string, key: string, expires: number): UrlType {
    const url = this.s3.getSignedUrl('getObject', {
      Bucket: bucket,
      Key: key,
      Expires: expires,
    });
    return new URL(url);
  }
  public parseFileURL(avatar: string, bucket: string, expires?: number): string {
    const signedUrl = this.getSignedUrl(avatar, expires || 3600, bucket);
    return String(signedUrl.href);
  }
}
export default FileService;
